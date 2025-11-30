import { useState } from "react";
import { createOpenAIClient } from "../utility/openai";
import { createGeminiClient } from "../utility/gemini";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../utility/gptSlice";


const useGenerateRecipe = () => {
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const generateRecipes = async (userKey, prompt, ingredients) => {
    try {
      dispatch(setLoadingState())
      // setLoading(true);
      setError(null);

      let provider = "";

      // Auto-detect provider
      if (userKey.startsWith("sk-")) {
        provider = "openai";
      } else if (userKey.startsWith("AIza")) {
        provider = "gemini";
      } else {
        throw new Error("Invalid API key. Not OpenAI or Gemini.");
      }

      // OPENAI FLOW
      if (provider === "openai") {
        const client = createOpenAIClient(userKey);
        const response = await client.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are an expert chef..." },
            { role: "user", content: prompt },
          ],
        });

        return response.choices[0].message.content;
      }

      // GEMINI FLOW
      if (provider === "gemini") {
        const genAI = createGeminiClient(userKey);
        const response = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt+`user ingredients: ${ingredients}`,
        });
        const result = response.text;
        const clean = result.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(clean);
      }
    } catch (err) {
      console.error("AI Error:", err);
      setError(err.message || "Something went wrong");
      return null;
    } finally {
      dispatch(setLoadingState())
    }
  };

  return { generateRecipes, error };
};

export default useGenerateRecipe;
