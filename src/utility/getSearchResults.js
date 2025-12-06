import { createGeminiClient } from "./gemini";

export const getIngredientSuggestions = async (query, userKey) => {
  if (!query || !userKey) return [];

  const genAI = createGeminiClient(userKey);

  const prompt = `
  Suggest 10 cooking ingredients that begin with or closely match "${query}".
  Only return a JSON array of ingredient names. No extra text.
  Example: ["jeera", "jeera powder", "jeeravan"]
  `;

  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  // Get raw text output from the model
  const text =
    response.candidates?.[0]?.content?.parts?.[0]?.text || "";

  // Extract JSON portion safely
  const match = text.match(/\[[\s\S]*?\]/);
  if (!match) return [];

  try {
    return JSON.parse(match[0]);
  } catch {
    return [];
  }
};
