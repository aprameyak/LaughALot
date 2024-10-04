import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

const systemPrompt = "You are a jokemaker.";
const userPrompt = "Write a joke about any topic and send it without additional text";

export async function GET(req) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o", // Verify this model name
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 1,
    top_p: 0.5,
    top_k: 0.5,
    max_tokens: 150,
  });
  return NextResponse.json({ message: completion.choices[0].message.content})
}
export async function POST(req) {
  const { topic } = await req.json();
  const completion = await openai.chat.completions.create({
    model: "gpt-4o", // Verify this model name
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: "Write a joke about " + topic + "without additional text" },
    ],
  });
  return NextResponse.json({ message: completion.choices[0].message.content})
}
