import {
  Connection,
  PublicKey,
} from "@solana/web3.js";
import { createClient } from "../../graphql/__generated__";
import { logger } from "../../utils/logger";
import { CronJob } from "./cron";

const ANCHOR_PROVIDER_URL = process.env.ANCHOR_PROVIDER_URL ?? "";
const connection = new Connection(ANCHOR_PROVIDER_URL);

const indexerURL = process.env.INDEXER_URL;

const run = async () => {
  const options = {
    url: indexerURL,
  };
  const gqlClient = createClient(options);
  const AUTOCRAT_PROGRAM_ID = new PublicKey(
    "autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg"
  );

  try {
    logger.log("Querying transactions for program version 0.3");

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

export const MonitorTransactions: CronJob = {
  cronExpression: "*/5 * * * *",
  jobFunction: run,
};
