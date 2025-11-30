import { GoogleGenAI } from "@google/genai";

export function createGeminiClient(userKey) {
  if (!userKey) throw new Error("Missing Gemini API Key");

  return new GoogleGenAI({apiKey: userKey});
}
