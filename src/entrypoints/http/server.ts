import cors from "cors";
import express from "express";
import { logger } from "../../utils/logger";
import { railwayUpdatesPost } from "./railway-updates";

const PORT = process.env.PORT ?? 8080;

export function startServer() {
  logger.log("starting server");
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: "*", allowedHeaders: ["Content-Type"] }));
  app.post("/railway-updates", railwayUpdatesPost);

  app.listen(PORT, () => {
    logger.log(`Server listening on Port ${PORT}`);
  });
}
