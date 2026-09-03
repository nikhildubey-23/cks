import { NextRequest } from "next/server";
import Groq from "groq-sdk";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let message: string;
  try {
    const body = await req.json();
    message = typeof body?.message === "string" ? body.message.trim() : "";
  } catch {
    return Response.json({ reply: "Sorry, I couldn't read that message." }, { status: 400 });
  }

  if (!message) {
    return Response.json({ reply: "Please type a question about the school." }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json({ reply: "The chat assistant isn't configured yet. Please try again later." }, { status: 503 });
  }

  try {
    const client = new Groq({ apiKey });
    const chatCompletion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: CHAT_SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      temperature: 0.4,
      max_tokens: 300,
    });
    const reply = chatCompletion.choices?.[0]?.message?.content?.trim();
    return Response.json({ reply: reply || "I'm not sure about that. Please call the school for details." });
  } catch (err) {
    console.error("Groq chat error:", err);
    return Response.json({ reply: "Sorry, something went wrong. Please try again in a moment." }, { status: 500 });
  }
}
