import Cron from "croner";
import { MonitorProposals } from "./monitor-proposals";
import { MonitorBalances } from "./monitor-balances";


export function runJobs() {

  new Cron(
    MonitorProposals.cronExpression,
    MonitorProposals.jobFunction
  );
  new Cron(
    MonitorBalances.cronExpression,
    MonitorBalances.jobFunction
  );

}
