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

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

const buildAndSendTranxation = async (ixs: any, autocratClient: AutocratClient) => {
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
  try {
    logger.log("sending crank txs");
    const res = await autocratClient.provider.sendAndConfirm(tx);
    logger.log("Cranking done:", res);
  } catch (e) {
    if (e && e.hasOwnProperty('signature')) {
      await sleep(10000);
      const txResult = await provider.connection.getSignatureStatuses([e.signature])
      logger.log("txResult", txResult);
    }
  }
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
    logger.log("Querying DB proposals");

    const proposals = await fetchActiveProposalsByVersion(VERSION);

    const inProgressProposalPublicKeys = proposals
      .filter((p) => p.proposal_acct !== "")
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );

    // Fetches from our database based on date...
    let shouldFinalizeProposalPublicKeys = proposals
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
    // TODO: In here we need to take a mod of however many qe can fit in txn
    const loopTimes = Math.ceil(amms.length / 12);
    console.log("loopTimes", loopTimes);
    try{
      for (let i = 0; i < amms.length; i++) {
        ixs.push(
          await autocratClient.ammClient.crankThatTwapIx(amms[i]).instruction()
        );
        if(i > 0 && (i % 12) === 0) {
          logger.log("cranking 12 amms");
          if(ixs.length > 0) {
            console.log("sending crank txs", ixs);
            await buildAndSendTranxation(ixs, autocratClient);
            ixs = [];
          }
        }
        if((i + 1) === amms.length) {
          logger.log("sending last crank txs", ixs);
          await buildAndSendTranxation(ixs, autocratClient);
          ixs = [];
        }
      }
    } catch (e) {
      console.log("error", e)
    }
    // if (amms.length > 12) {
    //   logger.log("cranking more than 12 amms, skipping");
    //   return;
    // }
    // for (const amm of amms) {
    //   ixs.push(
    //     await autocratClient.ammClient.crankThatTwapIx(amm).instruction()
    //   );
    // }
    

    // Setup for blockheight check..
    let currentBlockHeight: number | null = null;
    try {
      currentBlockHeight = await provider.connection.getBlockHeight()
      logger.log(`Current block height: ${currentBlockHeight}`);
    } catch (e) {
      logger.error("failed to get current block height:", e);
      logger.log("still proceeding with finalization, not good, but worth it...");
    }

    let currentSlotHeight: number | null = null;
    try {
      currentSlotHeight = await provider.connection.getSlot()
      logger.log(`Current slot height: ${currentSlotHeight}`);
    } catch (e) {
      logger.error("failed to get current slot height:", e);
    }

    let couldFinalizeProposalPubKeys: PublicKey[] = [];
    
    if (currentBlockHeight && currentSlotHeight) {
      couldFinalizeProposalPubKeys = proposals
        .filter(
        (p) => p.proposal_acct !== "" && (Number(p.end_slot) <= currentBlockHeight || Number(p.end_slot) <= currentSlotHeight)
      )
      .map(
        (proposal: { proposal_acct: string }) => new PublicKey(proposal.proposal_acct)
      );
    }

    // NOTE: This is expensive on the RPC...
    // We fall back to checking the chain just to be sure..
    // TODO: We should probably do this for cranking as well... DO NOT TRUST THE DB!
    if(currentBlockHeight && currentSlotHeight) {
      try {
        const allChainProposals = await autocratClient.autocrat.account.proposal.all();
        
        // Find any new pending proposals that aren't already in our list
        const hasNewProposalsToProcess = allChainProposals.some(proposal => 
          proposal.account.state === "Pending" && 
          !couldFinalizeProposalPubKeys.some(pubKey => pubKey.equals(proposal.publicKey))
        );

        // Only fetch DAOs if we have new proposals to process
        if (hasNewProposalsToProcess) {
          const allChainDaos = await autocratClient.autocrat.account.dao.all();
          for (const proposal of allChainProposals) {
            const dao = allChainDaos.find((dao) => dao.publicKey.equals(proposal.account.dao));
            const slotsPerProposal = dao?.account.slotsPerProposal.toNumber();
            const endSlot = proposal.account.slotEnqueued + slotsPerProposal;
            if (endSlot <= currentBlockHeight || endSlot <= currentSlotHeight) {
              if (proposal.account.state === "Pending") {
                const alreadyIncluded = couldFinalizeProposalPubKeys.some(
                  (pubKey) => pubKey.equals(proposal.publicKey)
                );
                if (!alreadyIncluded) {
                  couldFinalizeProposalPubKeys.push(proposal.publicKey);
                }
              }
            }
          }
        }
      } catch (e) {
        logger.error("failed to fetch all chain proposals and daos:", e);
      }
    }

    // We have a proposal we think we should finalize based on date...
    if (shouldFinalizeProposalPublicKeys.length > 0) {
      logger.log("We may have proposals to finalize");
      if (currentBlockHeight && currentSlotHeight) {  
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

    // We have proposals we think we should finalize based on blockheight...
    if (couldFinalizeProposalPubKeys.length > 0) {
      logger.log("We may have proposals to finalize based on blockheight or slot height");
      if (shouldFinalizeProposalPublicKeys.length <= 0) {
        logger.error('We have blockheight / slotheight proposals but no date proposals, override')
        // We have blockheight proposals but don't think we should based on date..
        // Override shouldFinalizeProposalPublicKeys with couldFinalizeProposalPubKeys
        shouldFinalizeProposalPublicKeys = couldFinalizeProposalPubKeys;
      }
    }

    // TODO: We should also really check the chain and parse through... Who cares about the DB?!


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
    logger.errorWithChatBotAlert(`${BACKOFFICE_ENVIRONMENT}: failed to crank proposal markets:`, e);
  }
};

export const ProposalCrankAndFinalize: CronJob = {
  cronExpression: "45 * * * * *",
  jobFunction: run,
};
