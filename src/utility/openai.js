import OpenAI from "openai";
export function createOpenAIClient(userKey) {
  if (!userKey) throw new Error("Missing API Key");
  return new OpenAI({ apiKey: userKey, dangerouslyAllowBrowser: true });
}
