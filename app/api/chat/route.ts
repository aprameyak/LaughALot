import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = "Write a joke about the following topic and send it without additional text: ";
const userPrompt = "Write a joke about any topic and send it without additional text";

function getModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-04-17" });
}

export async function GET() {
  const model = getModel();
  const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: userPrompt }] }] });
  const text = result.response.text();
  return NextResponse.json({ message: text });
}

export async function POST(req: Request) {
  const { topic } = await req.json() as { topic?: string };
  const model = getModel();
  const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: systemPrompt + (topic ?? "") }] }] });
  const text = result.response.text();
  return NextResponse.json({ message: text });
}


