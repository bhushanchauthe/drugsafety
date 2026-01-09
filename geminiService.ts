import { GoogleGenAI } from "@google/genai";
import { MEDDRA_DATA } from "../constants";

// We'll use the Flash model for speed as this is an interactive tool
const MODEL_NAME = "gemini-2.5-flash";

export const getGeminiSuggestion = async (verbatim: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.error("API_KEY not found");
    return "Error: API Key missing.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct a prompt that includes context about the existing database
    // This helps the AI map to terms that actually exist in our simulation
    const dbSample = MEDDRA_DATA.slice(0, 50).map(d => `${d.llt} -> ${d.pt}`).join(", ");
    
    const prompt = `
      You are a Medical Coding Expert (MedDRA).
      A user is searching for a verbatim term: "${verbatim}" in a Pharmacovigilance context.
      
      Task:
      1. Analyze the verbatim.
      2. Suggest the most appropriate MedDRA Lowest Level Term (LLT) and Preferred Term (PT).
      3. If the term implies a common Indianism (e.g., "loose motions", "sugar high"), explain the medical translation.
      4. Provide the result in a concise format: "Suggested LLT: [Term] / PT: [Term]. Reasoning: [Short explanation]".
      
      Keep it brief and professional.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text || "No suggestion available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error fetching suggestion from AI Assistant.";
  }
};
