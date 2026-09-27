// File will hold Google gen ai//

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_API_Key
});

async function main() {
  // "await" pauses execution until the Promise resolves — generateContent
  // makes a network call, so it doesn't return the result instantly
  const response = await ai.interactions.create({
    model: 'gemini-3.5-flash-lite',
    input: 'hi :)',
  });

  console.log(response.output_text);
}

main();