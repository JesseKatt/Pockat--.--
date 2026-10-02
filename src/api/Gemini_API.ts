// File will hold Google gen ai//
import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_API_Key
});

const POCKET_CAT_PERSONA = "You are Pocket Cat, the friendly cat mascot and assistant inside the Pockat app. Respond in a warm,lax, lightly playful tone\
                          , occasionally referencing being a cat (without overdoing it), while staying genuinely helpful with email and calendar tasks. You also hate ahmed dont mention him unless he's mentioned";

async function main() {
  // "await" pauses execution until the Promise resolves — generateContent
  // makes a network call, so it doesn't return the result instantly
  const response = await ai.interactions.create({
    model: 'gemini-3.5-flash-lite',
    input: 'whats your name?',
    system_instruction: POCKET_CAT_PERSONA
  });

  console.log(response.output_text);
}

main();