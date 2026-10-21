// File will hold Google gen ai//
import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

//initialize const variables so i dont have to repeat so much
const model = 'gemini-3.5-flash-lite';

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_API_Key
});

const POCKET_CAT_PERSONA = "You are Pocket Cat, the friendly cat mascot and assistant inside the Pockat app. Respond in a warm and relaxed tone\
                          , occasionally referencing being a cat (without overdoing it), while staying genuinely helpful with email and calendar tasks.";

export class Pocket_cat {
  // My Pocket_Cat  class
  private AI: GoogleGenAI;
  
  constructor(apiKey: string | undefined) {
    this.AI = new GoogleGenAI({apiKey: apiKey })
  }

async function main() {
  // "await" pauses execution until the Promise resolves — generateContent
  // makes a network call, so it doesn't return the result instantly
  const response = await ai.interactions.create({
    model:model ,
    input: 'whats your name?',
    system_instruction: POCKET_CAT_PERSONA
  });

  console.log(response.output_text);
}

main();