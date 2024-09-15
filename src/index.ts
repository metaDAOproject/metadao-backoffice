import { runJobs } from "./entrypoints/cron";
import { startServer } from "./entrypoints/http/server";

const main = () => {
  runJobs();
  startServer();
};

main();
