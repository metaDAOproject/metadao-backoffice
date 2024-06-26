import { AutocratClient } from "@metadaoproject/futarchy";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { createClient } from "../../graphql/__generated__";

export const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const indexerURL = process.env.INDEXER_URL_;

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

  const newClient = new AutocratClient(
    provider,
    AUTOCRAT_PROGRAM_ID,
    CONDITIONAL_VAULT_PROGRAM_ID,
    AMM_PROGRAM_ID,
    []
  );

  try {
    console.log("Querying proposals");

    const { proposals } = await gqlClient.query({
      proposals: {
        __args: {
          where: {
            status: { _eq: "Pending" },
            ended_at: { _gt: new Date().toISOString() },
          },
          order_by: [
            {
              created_at: "desc",
            },
          ],
        },
        proposal_acct: true,
      },
    });

    const proposalPublicKeys = proposals
      .filter((p) => p.proposal_acct !== "")
      .map(
        (proposal: { proposal_acct: string }) =>
          new PublicKey(proposal.proposal_acct)
      );

    console.log("Cranking proposal markets for pending proposals");

    const crankTxn = await newClient.crankProposalMarkets(
      proposalPublicKeys,
      1_000
    );
    console.log(crankTxn);
    console.log("Cranking done");
  } catch (e) {
    console.error(e);
  }
};

run();
