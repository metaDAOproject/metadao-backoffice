import { AutocratClient } from "@metadaoproject/futarchy";
import {
  Connection,
  Keypair,
  PublicKey,
} from "@solana/web3.js";
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";
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
const USDC_MINT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
const token = 'USDC'; // TODO: For future use..
const expectedBalance = 100_000; // TODO: For future use..

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
            _eq: version, // TODO: Confirm this works..
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
    logger.log("Querying proposals for program version 0.3");
    
    // TODO: One day we should probably go through all proposals across all programs...
    const proposals = await fetchProposalsByVersion(0.3);

    const allDBProposalsPublicKeys = proposals
      .filter((p) => p.proposal_acct !== "")
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );
    // TODO: Keep that database unchanged until a change event occurs
    logger.log('fetched proposals in db', allDBProposalsPublicKeys.length);
    // Fetch our on chain proposals for this program version
    const allChainProposals = await autocratClient.autocrat.account.proposal.all();

    logger.log('fetched proposals on chain', allChainProposals.length);

    // Alert to a mismatch
    const sizeMismatchOfDBAndChainProposals = allDBProposalsPublicKeys.length !== allChainProposals.length;
    if (sizeMismatchOfDBAndChainProposals) {
      logger.errorWithChatBotAlert(`We're missing proposals in our database DB: ${allDBProposalsPublicKeys.length} Chain: ${allChainProposals.length}`)
    }
    // TODO: Here we can check each DAO and key off the proposals so we see which DAO has a weird count...

    let checkedDaos: string[] = [];

    for (const proposal of allChainProposals) {
      if (!allDBProposalsPublicKeys.map((key) => key.toBase58()).includes(proposal.publicKey.toBase58())){
        // We don't have the proposal tracked, let's alert
        logger.errorWithChatBotAlert(`Proposal ${proposal.publicKey.toBase58()} not being tracked in the database`)
      } else {
        // Okay we have this proposal, let's check the treasury balance
        // If we haven't already checked the treasury for this DAO, let's do that now
        if (!checkedDaos.includes(proposal.account.dao.toBase58())) {
          logger.log(`Checking DAO ${proposal.account.dao.toBase58()}`)
          checkedDaos.push(proposal.account.dao.toBase58()); // Add it to the list so we don't check it again
          
          const proposalDAO = await autocratClient.getDao(proposal.account.dao);
          logger.log(`proposal count: ${proposalDAO.proposalCount} treasury: ${proposalDAO.treasury.toBase58()}`);

          const treasuryAccount = getAssociatedTokenAddressSync(USDC_MINT, proposalDAO.treasury, true, TOKEN_PROGRAM_ID);
          logger.log('USDC Account', treasuryAccount.toBase58());
          const accountExists = await connection.getAccountInfo(treasuryAccount);
          if (accountExists) {
            try{
              const tokenAccountBalance = await connection.getTokenAccountBalance(treasuryAccount);
              // TODO: Add in assumed balance as well to check against...
              // TODO: Fix this check, it should know something..
              const balance = tokenAccountBalance?.value?.uiAmount ?? 0;
              if (balance) {
                logger.log(`treasury ${token} balance: ${balance}`);
                if (balance < expectedBalance) {
                  // NOTE: Need to escape the .
                  // TODO: Write parser for this
                  logger.errorWithChatBotAlertRich(
                    `DAO [${proposal.account.dao.toBase58()}](https://explorer\\.solana\\.com/address/${proposal.account.dao.toBase58()}) treasury ${token} balance of [${balance}](https://explorer\\.solana\\.com/address/${treasuryAccount}) is less than expected ${expectedBalance}`
                  )
                }
              }
            } catch (e) {
              logger.log('Probably has no balance....');
            }
          } else {
            logger.log('Treasury account for USDC not found');
          }
        }
      }
    }

    // Get's 1000 transactions from the chain we'll check against it in the database...
    const signatures = await connection.getSignaturesForAddress(AUTOCRAT_PROGRAM_ID);
    logger.log(`Found ${signatures.length} signatures on chain for autocrat program`);

    // Map it to strings for comparison..
    const signatureStrings = signatures.map((sig) => sig.signature);
    logger.log(`Found ${signatureStrings.length} signatures on chain for autocrat program`);

    // Fetch our transactions from the db
    // TODO: This could be expensive / slow
    const { transactions } = await gqlClient.query({
      transactions: {
        __args: {
          where: {
            tx_sig: {
              _in: signatureStrings
            }
          },
          order_by: [
            {
              block_time: "desc"
            }
          ],
          limit: 1000
        },
        tx_sig: true
      }
    })

    // TODO: We should add check against the signatures table as well as account watcher transactions

    const { transaction_watcher_transactions } = await gqlClient.query({
      transaction_watcher_transactions: {
        __args: {
          where: {
            tx_sig: {
              _in: signatureStrings
            }
          },
          order_by: [
            {
              slot: "desc"
            }
          ],
          limit: 1000
        },
        tx_sig: true
      }
    })

    logger.log(`Found ${transaction_watcher_transactions.length} transaction watcher transactions in the database.`);

    logger.log(`Found ${transactions.length} transactions in the database.`);

    let hasAlertedMissingTransaction = false;
    if (transactions.length !== signatureStrings.length) {
      // We're missing something in the db, let's find it..
      for (const signature of signatures) {
        if (!transactions.map((t) => t.tx_sig).includes(signature.signature)) {
          if (!hasAlertedMissingTransaction) {
            // This has an issue with bubblegum mints and all kinds of dumb stuff..
            logger.error(`Found ${signatures.length} transactions on chain but only ${transactions.length} in the database.`);
            // logger.errorWithChatBotAlert(`Found ${signatures.length} transactions on chain but only ${transactions.length} in the database.`)
            // NOTE: Turned off for now.. want to check indexing..
            hasAlertedMissingTransaction = true;
          }
          logger.error(`We're missing transaction: ${signature.signature} in our database.`)
        }
      }
    }
  } catch (e) {
    logger.errorWithChatBotAlert("failed to monitor proposals, check chain", e);
  }
};

export const ProposalMonitorEvents: CronJob = {
  cronExpression: "10 * * * * *",
  jobFunction: run,
};
