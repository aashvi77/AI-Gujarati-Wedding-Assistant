import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("No Gemini API key found. Set GEMINI_API_KEY in your environment variables.");
}

export const gemini = new GoogleGenerativeAI(apiKey);
