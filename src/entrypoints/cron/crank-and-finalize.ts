import { AutocratClient } from "@metadaoproject/futarchy";
import { ComputeBudgetProgram, PublicKey, Transaction } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { createClient } from "../../graphql/__generated__";
import { logger } from "../../utils/logger";
import { CronJob } from "./cron";

export const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const indexerURL = process.env.INDEXER_URL;

const run = async () => {
  const options = {
    url: indexerURL,
  };
  const gqlClient = createClient(options);
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

    const { proposals } = await gqlClient.query({
      proposals: {
        __args: {
          where: {
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
      },
    });

    const inProgressProposalPublicKeys = proposals
      .filter((p) => p.proposal_acct !== "")
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );

    const shouldFinalizeProposalPublicKeys = proposals
      .filter(
        (p) => p.proposal_acct !== "" && new Date(p.ended_at) < new Date()
      )
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );

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

    for (const proposal of shouldFinalizeProposalPublicKeys) {
      try {
        const res = await autocratClient.finalizeProposal(proposal);
        console.log(
          "proposal finalized:",
          proposal.toBase58(),
          ". signature:",
          res
        );
      } catch (e) {
        logger.errorWithChatBotAlert(
          "failed to finalize proposal:",
          proposal.toBase58(),
          e
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
