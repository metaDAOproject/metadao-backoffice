import { Request, Response } from "express";
import { logger } from "../../utils/logger";

export async function railwayUpdatesPost(req: Request, res: Response) {
  try {
    const {
      deployment: {
        creator: { deploymentCreatorName, deploymentCreatorAvatar },
        environment: { environmentName },
      },
      status,
      service: { serviceName },
    } = req.body;

    const telegramMessageBody = `Environment: ${environmentName.toUpperCase()}\nService: ${serviceName}\nNew Status: ${status}\nDeployment Creator: ${deploymentCreatorName}\nCreated by: ${deploymentCreatorAvatar}`;

    logger.infoWithChatBotAlert(telegramMessageBody);

    return res.status(200).json({});
  } catch (e: any) {
    logger.error(e);
    return res.status(400).json({ error: e.message });
  }
}
