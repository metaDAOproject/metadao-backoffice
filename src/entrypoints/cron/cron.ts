export type CronJob = {
  cronExpression: string;
  jobFunction: () => void;
};
