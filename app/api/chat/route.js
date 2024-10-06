import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatOpenAI } from "@langchain/openai";
const openai = new OpenAI();

const systemPrompt = "Write a joke about the following topic and send it without additional text: ";
const userPrompt = "Write a joke about any topic and send it without additional text";
export async function GET(req) {
  const llm = new ChatOpenAI({
    topP: 1,
    temperature: 0.9,
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o",
  });
  const response = await llm.invoke(userPrompt);
  return NextResponse.json({ message: response.content})
}
export async function POST(req) {
  const llm = new ChatOpenAI({
    topP: 1,
    temperature: 0.9,
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o",
  });
  const { topic } = await req.json();
  const response = await llm.invoke(systemPrompt + topic);
  return NextResponse.json({ message: response.content})
}
