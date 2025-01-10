import { AutocratClient } from "@metadaoproject/futarchy";
import {
  Connection,
  Keypair,
  PublicKey,
} from "@solana/web3.js";
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as anchor from "@coral-xyz/anchor";
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

const USDC_MINT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
const token = 'USDC'; // TODO: For future use..
const mapTreasuryToBalance = new Map<string, number>();


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
    logger.log("Querying balances for Daos under version 0.3");
    
    const allChainProposals = await autocratClient.autocrat.account.proposal.all();

    logger.log('fetched proposals on chain', allChainProposals.length);

    let checkedDaos: string[] = [];

    for (const proposal of allChainProposals) {
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
                
                let expectedBalance = mapTreasuryToBalance.get(treasuryAccount.toString());
                if (!expectedBalance) {
                  expectedBalance = balance;
                  mapTreasuryToBalance.set(treasuryAccount.toString(), balance);
                } else {
                  //calculate a moving average of the balance
                  const amntToAverageOver = 100;
                  const newAverageBalance = expectedBalance * (amntToAverageOver-1)/amntToAverageOver + balance/amntToAverageOver;
                  mapTreasuryToBalance.set(treasuryAccount.toString(), newAverageBalance);
                }

                if (balance < expectedBalance) {
                    // NOTE: Need to escape the .
                    // TODO: Write parser for this
                    logger.errorWithChatBotAlertRich(
                    `DAO [${proposal.account.dao.toBase58()}](https://explorer\\.solana\\.com/address/${proposal.account.dao.toBase58()}) treasury ${token} balance of [${balance}](https://explorer\\.solana\\.com/address/${treasuryAccount}) is less than expected ${expectedBalance}`
                    )
                    //reset the expected balance to the current balance so that we don't alert again unless it steps down again
                    mapTreasuryToBalance.set(treasuryAccount.toString(), balance);
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

  } catch (e) {
    logger.errorWithChatBotAlert("failed to monitor balances, check chain", e);
  }
};

export const MonitorBalances: CronJob = {
  cronExpression: "*/15 * * * *",
  jobFunction: run,
};
