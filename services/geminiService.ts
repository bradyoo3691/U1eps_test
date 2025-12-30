
import { GoogleGenAI, Type } from "@google/genai";

// Note: API_KEY is handled by the environment as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBlogIdea = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a blog post idea for a premium furniture brand called "U1 eps". Topic: ${topic}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
          },
          required: ["title", "excerpt"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
