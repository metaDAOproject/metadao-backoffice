import Cron from "croner";
import { ProposalCrankAndFinalize } from "./crank-and-finalize";

export function runJobs() {
  new Cron(
    ProposalCrankAndFinalize.cronExpression,
    ProposalCrankAndFinalize.jobFunction
  );
}
