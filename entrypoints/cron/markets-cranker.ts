import { AutocratClient } from "@metadaoproject/futarchy";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";

export const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

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

  const newClient = new AutocratClient(
    provider,
    AUTOCRAT_PROGRAM_ID,
    CONDITIONAL_VAULT_PROGRAM_ID,
    AMM_PROGRAM_ID,
    []
  );
  // Crank TWAP
  try {
    console.log("cranking");
    const crankTxn = await newClient.crankProposalMarkets(
      [new PublicKey("9BMRY1HBe61MJoKEd9AAW5iNQyws2vGK6vuL49oR3AzX")],
      1_000
    );
    console.log(crankTxn);
    console.log("cranking done");
  } catch (e) {
    console.error(e);
  }
};

run();
