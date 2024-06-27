import { MarketsCranker } from './markets-cranker'

function runJobs() {
    const do = new Cron(MarketsCranker.cronExpression, () => MarketsCranker.jobFunction());
}