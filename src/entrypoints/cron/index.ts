import Cron from "croner";
import { ProposalCrankAndFinalize } from "./crank-and-finalize";
import { MonitorProposals } from "./monitor-proposals";
import { MonitorBalances } from "./monitor-balances";
import { MonitorTransactions } from "./monitor-transactions";

export function runJobs() {
  new Cron(
    ProposalCrankAndFinalize.cronExpression,
    ProposalCrankAndFinalize.jobFunction
  );
  new Cron(
    MonitorProposals.cronExpression,
    MonitorProposals.jobFunction
  );
  new Cron(
    MonitorBalances.cronExpression,
    MonitorBalances.jobFunction
  );
  new Cron(
    MonitorTransactions.cronExpression,
    MonitorTransactions.jobFunction
  );
}
