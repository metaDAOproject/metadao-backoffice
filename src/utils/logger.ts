import { AlertChatBotInterface, TelegramBotAPI } from "../adapters/telegram";

const TELEGRAM_ALERT_CHAT_ID = process.env.TELEGRAM_ALERT_CHAT_ID ?? "";

export class Logger {
  private chatBotApi: AlertChatBotInterface;

  constructor(chatBotApi: AlertChatBotInterface) {
    this.chatBotApi = chatBotApi;
  }

  private formatData(data: any[]): string {
    return data
      .map((item) => {
        if (typeof item === "object") {
          try {
            return JSON.stringify(item);
          } catch (error) {
            return "[Circular]";
          }
        }
        if (typeof item === "undefined") {
          return "undefined";
        }
        try {
          return item.toString();
        } catch (e) {
          return "";
        }
      })
      .join(" ");
  }

  log(...data: any[]): void {
    console.log(this.formatData(data));
  }

  info(...data: any[]): void {
    console.info(this.formatData(data));
  }

  error(...data: any[]): void {
    console.error(this.formatData(data));
  }

  errorWithChatBotAlert(...data: any[]): void {
    const formattedData = this.formatData(data);
    console.error(formattedData);
    if (TELEGRAM_ALERT_CHAT_ID) {
      this.chatBotApi.sendMessage(TELEGRAM_ALERT_CHAT_ID, formattedData);
    }
  }

  warn(message: string): void {
    console.warn(message);
  }
}

// TODO: add lint rule preventing default exports (default exports are antithetical to IDE auto refactors)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const telegramBotAPI = new TelegramBotAPI({
  token: TELEGRAM_BOT_TOKEN ?? "",
});
export const logger = new Logger(telegramBotAPI);
