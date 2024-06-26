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
        proposal_num: true,
        proposal_acct: true,
        proposer_acct: true,
        reactions: {
          reaction: true,
        },
        conditional_vault: {
          underlying_mint_acct: true,
          underlying_token_acct: true,
          cond_finalize_token_mint_acct: true,
          cond_revert_token_mint_acct: true,
        },
        conditionalVaultByQuoteVault: {
          underlying_mint_acct: true,
          underlying_token_acct: true,
          cond_finalize_token_mint_acct: true,
          cond_revert_token_mint_acct: true,
        },
        status: true,
        initial_slot: true,
        created_at: true,
        end_slot: true,
        ended_at: true,
        completed_at: true,
        description_url: true,
        updated_at: true,
        base_vault: true,
        quote_vault: true,
        fail_market_acct: true,
        pass_market_acct: true,
        pricing_model_fail_acct: true,
        pricing_model_pass_acct: true,
        markets: {
          market_acct: true,
          base_mint_acct: true,
          quote_mint_acct: true,
          market_type: true,
          twaps: {
            __args: {
              limit: 1,
              order_by: [
                {
                  created_at: "desc",
                },
              ],
            },
            last_observation: true,
            last_price: true,
          },
          prices: {
            __args: {
              limit: 1,
              order_by: [
                {
                  created_at: "desc",
                },
              ],
            },
            price: true,
            created_at: true,
          },
        },
        proposal_details: {
          title: true,
          slug: true,
          categories: true,
        },
        dao: {
          dao_detail: {
            name: true,
            slug: true,
          },
          pass_threshold_bps: true,
          tokenByBaseAcct: {
            mint_acct: true,
            image_url: true,
            decimals: true,
            symbol: true,
            name: true,
            supply: true,
          },
          tokenByQuoteAcct: {
            mint_acct: true,
            image_url: true,
            decimals: true,
            symbol: true,
            name: true,
            supply: true,
          },
          program: {
            program_acct: true,
            version: true,
            program_name: true,
          },
        },
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
