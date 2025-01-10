import { AutocratClient } from "@metadaoproject/futarchy";
import {
  Connection,
  Keypair,
  PublicKey,
} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { createClient } from "../../graphql/__generated__";
import { logger } from "../../utils/logger";
import { CronJob } from "./cron";

const ANCHOR_PROVIDER_URL = process.env.ANCHOR_PROVIDER_URL ?? "";
const kp = Keypair.generate();
const wallet = new anchor.Wallet(kp);
const connection = new Connection(ANCHOR_PROVIDER_URL);
export const provider = new anchor.AnchorProvider(connection, wallet, {
  commitment: "confirmed",
});
anchor.setProvider(provider);

const indexerURL = process.env.INDEXER_URL;

const fetchProposalsByVersion = async (version: number) => {
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
        },
        order_by: [
          {
            created_at: "desc",
          },
        ],
      },
      proposal_acct: true,
      ended_at: true,
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
    logger.log("Querying proposals for program version 0.3");
    
    // TODO: One day we should probably go through all proposals across all programs...
    const proposals = await fetchProposalsByVersion(0.3);

    const allDBProposalsPublicKeys = proposals
      .filter((p) => p.proposal_acct !== "")
      .map(
        (proposal: { proposal_acct: string }) =>
          proposal.proposal_acct
      );
    // TODO: Keep that database unchanged until a change event occurs
    logger.log('fetched proposals in db', allDBProposalsPublicKeys.length);
    // Fetch our on chain proposals for this program version
    const allChainProposals = await autocratClient.autocrat.account.proposal.all();
    logger.log('fetched proposals on chain', allChainProposals.length);

    // Alert to a mismatch
    const sizeMismatchOfDBAndChainProposals = allDBProposalsPublicKeys.length !== allChainProposals.length;
    if (sizeMismatchOfDBAndChainProposals) {
      logger.errorWithChatBotAlert(`New Proposal Added!`)
      // logger.errorWithChatBotAlert(`We're missing proposals  DB: ${allDBProposalsPublicKeys.length} Chain: ${allChainProposals.length}`)
      for(const proposal of allChainProposals) {
        if (!allDBProposalsPublicKeys.includes(proposal.publicKey.toBase58())) {
          logger.errorWithChatBotAlertRich(`We're missing proposal [${proposal.publicKey.toBase58()}](https://explorer\\.solana\\.com/address/${proposal.publicKey.toBase58()}) in our database`)
        }
      }
    }
  } catch (e) {
    logger.errorWithChatBotAlert("failed to monitor proposals, check system", e);
  }
};

export const MonitorProposals: CronJob = {
  cronExpression: "/12 * * * *",
  jobFunction: run,
};
