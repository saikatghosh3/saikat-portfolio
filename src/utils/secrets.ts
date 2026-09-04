const decode = (value: string): string => {
  try {
    return atob(value).trim();
  } catch {
    return "";
  }
};

export const getWeb3FormsSubmitUrl = () =>
  decode("aHR0cHM6Ly9hcGkud2ViM2Zvcm1zLmNvbS9zdWJtaXQ=");

export const getAccessKeyField = () => decode("YWNjZXNzX2tleQ==");

export const getWeb3FormsKey = () =>
  decode("M2Y3NTJjM2QtNzQ3Ny00NGUwLTg0NTMtMGIyNGU0ZmVjNjcx");

export const getTelegramBotToken = () =>
  decode(import.meta.env.VITE_TELEGRAM_BOT_TOKEN);

export const getTelegramChatId = () =>
  decode(import.meta.env.VITE_TELEGRAM_CHAT_ID);

export const getTelegramSendUrl = () =>
  decode("aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdA==") +
  getTelegramBotToken() +
  decode("L3NlbmRNZXNzYWdl");