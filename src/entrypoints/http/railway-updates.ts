import { Request, Response } from "express";
import { logger } from "../../utils/logger";

export async function railwayUpdatesPost(req: Request, res: Response) {
  try {
    const {
      environment: { name: environmentName },
      deployment: {
        creator: { name: creatorName, avatar },
      },
      status,
      service,
    } = req.body;

    const serviceName = service.name;

    const telegramMessageBody = `Environment: ${environmentName.toUpperCase()}\nService: ${serviceName}\nNew Status: ${status}\nDeployment Creator: ${creatorName}\nCreated by: ${avatar}`;

    logger.infoWithChatBotAlert(telegramMessageBody);

    return res.status(200).json({});
  } catch (e: any) {
    logger.error(e);
    return res.status(400).json({ error: e.message });
  }
}
