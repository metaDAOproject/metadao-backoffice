import { AutocratClient } from "@metadaoproject/futarchy";
import {
  ComputeBudgetProgram,
  Connection,
  Keypair,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { createClient } from "../../graphql/__generated__";
import { logger } from "../../utils/logger";
import { CronJob } from "./cron";

const ANCHOR_PROVIDER_URL = process.env.ANCHOR_PROVIDER_URL ?? "";
const SIGNER_SECRET = process.env.SIGNER_SECRET ?? "";
const kp = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(SIGNER_SECRET)));
const wallet = new anchor.Wallet(kp);
const connection = new Connection(ANCHOR_PROVIDER_URL);
export const provider = new anchor.AnchorProvider(connection, wallet, {
  commitment: "confirmed",
});
anchor.setProvider(provider);

const indexerURL = process.env.INDEXER_URL;

const BACKOFFICE_ENVIRONMENT = process.env.BACKOFFICE_ENVIRONMENT;

const VERSION = 0.3; // NOTE: Hardcoded for now

const fetchActiveProposalsByVersion = async (version: number) => {
  const options = {
    url: indexerURL,
  };
  const gqlClient = createClient(options);
  
  const { proposals } = await gqlClient.query({
    proposals: {
      __args: {
        where: {
          autocrat_version: {
            _eq: version,
          },
          status: { _eq: "Pending" },
        },
        order_by: [
          {
            created_at: "desc",
          },
        ],
      },
      proposal_acct: true,
      ended_at: true,
      end_slot: true,
      status: true,
      dao_acct: true,
    },
  });

  return proposals;
}

const run = async () => {

  const AUTOCRAT_PROGRAM_ID = new PublicKey(
    "autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg"
  );
  const CONDITIONAL_VAULT_PROGRAM_ID = new PublicKey(
    "VAU1T7S5UuEHmMvXtXMVmpEoQtZ2ya7eRb7gcN47wDp"
  );
  const AMM_PROGRAM_ID = new PublicKey(
    "AMM5G2nxuKUwCLRYTW7qqEwuoqCtNSjtbipwEmm2g8bH"
  );

  const autocratClient = new AutocratClient(
    provider,
    AUTOCRAT_PROGRAM_ID,
    CONDITIONAL_VAULT_PROGRAM_ID,
    AMM_PROGRAM_ID,
    []
  );

  try {
    logger.log("Querying proposals");

    const proposals = await fetchActiveProposalsByVersion(VERSION);

    const inProgressProposalPublicKeys = proposals
      .filter((p) => p.proposal_acct !== "")
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );

    // Fetches from our database based on date...
    const shouldFinalizeProposalPublicKeys = proposals
      .filter(
        (p) => p.proposal_acct !== "" && new Date(p.ended_at) < new Date()
      )
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );
    
    // no proposals to crank so returning
    if (inProgressProposalPublicKeys.length === 0) return;

    // Crank the proposal...
    logger.log(
      `cranking ${inProgressProposalPublicKeys.length} proposals, and finalizing ${shouldFinalizeProposalPublicKeys.length} proposals.`
    );

    const amms = [];
    for (const proposal of inProgressProposalPublicKeys) {
      logger.log("fetching proposal to crank:", proposal.toBase58());
      const storedProposal = await autocratClient.getProposal(proposal);
      amms.push(storedProposal.passAmm);
      amms.push(storedProposal.failAmm);
    }
    let ixs = [];
    for (const amm of amms) {
      ixs.push(
        await autocratClient.ammClient.crankThatTwapIx(amm).instruction()
      );
    }
    let tx = new Transaction();
    tx.add(
      ComputeBudgetProgram.setComputeUnitLimit({
        units: 4_000 * ixs.length,
      })
    );
    tx.add(
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 1,
      })
    );
    tx.add(...ixs);
    logger.log("sending crank txs");
    const res = await autocratClient.provider.sendAndConfirm(tx);
    logger.log("Cranking done:", res);

    // Spot check for finalization..
    if (shouldFinalizeProposalPublicKeys.length > 0) {
      logger.log("We may have proposals to finalize");
      let currentBlockHeight: number | null = null;
      try {
        currentBlockHeight = await provider.connection.getBlockHeight()
        logger.log(`Current block height: ${currentBlockHeight}`);
      } catch (e) {
        logger.error("failed to get current block height:", e);
        logger.log("still proceeding with finalization, not good, but worth it...");
      }
      if (currentBlockHeight) {
        const couldFinalizeProposalPubKeys = proposals
          .filter(
          (p) => p.proposal_acct !== "" && p.end_slot <= currentBlockHeight
        )
        .map(
          (proposal: { proposal_acct: string }) => new PublicKey(proposal.proposal_acct)
        );
  
        if (couldFinalizeProposalPubKeys.length <= 0) {
          logger.errorWithChatBotAlert(`${BACKOFFICE_ENVIRONMENT}: Our dates in the database are wrong, check logic and update this ASAP!`);
          logger.log("Proposals we thought we could finalize based on date");
          for (const proposal of shouldFinalizeProposalPublicKeys) {
            logger.log("Account:", proposal.toBase58());
          }
          return;
        }
      }
    }

    // Finalize the proposal...
    for (const proposal of shouldFinalizeProposalPublicKeys) {
      logger.log("finalizing proposal:", proposal.toBase58());
      try {
        const res = await autocratClient.finalizeProposal(proposal);
        logger.log(
          "proposal finalized:",
          proposal.toBase58(),
          ". signature:",
          res
        );
      } catch (e: any) {
        logger.errorWithChatBotAlert(
          `${BACKOFFICE_ENVIRONMENT}: failed to finalize proposal:`,
          proposal.toBase58(),
          e.message
            ? {
                message: e.message,
                stack: e.stack,
                name: e.name,
                cause: e.cause,
                fileName: e.fileName,
                lineNumber: e.lineNumber,
              }
            : e
        );
      }
    }
  } catch (e) {
    logger.errorWithChatBotAlert("failed to crank proposal markets:", e);
  }
};

export const ProposalCrankAndFinalize: CronJob = {
  cronExpression: "45 * * * * *",
  jobFunction: run,
};
