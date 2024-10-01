import Cron from "croner";
import { ProposalCrankAndFinalize } from "./crank-and-finalize";
import { ProposalMonitorEvents } from "./monitor-events";
export function runJobs() {
  new Cron(
    ProposalCrankAndFinalize.cronExpression,
    ProposalCrankAndFinalize.jobFunction
  );
  new Cron(
    ProposalMonitorEvents.cronExpression,
    ProposalMonitorEvents.jobFunction
  );
}
