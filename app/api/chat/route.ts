import { NextRequest, NextResponse } from "next/server";
import { portfolioKnowledge } from "@/lib/portfolio-knowledge";

async function getOpenAIResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>,
) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  // Build conversation messages
  const messages = [
    {
      role: "system",
      content: `You are a helpful AI assistant for a developer portfolio website. Use the following information to answer questions about the portfolio owner and their work:

${portfolioKnowledge}

Rules:
- Talk like a human, not a document
- No markdown, no headers, no bullet points
- Keep responses short — 2-3 sentences max unless more detail is asked
- Don't dump all information at once, keep it conversational
- If someone asks about projects, highlight 1-2 and ask if they want to know more
- If asked about something you don't know, say something like "Hmm Luuk hasn't told me that yet — maybe reach out to him directly!"
- Never make up information about Luuk`,
    },
    ...conversationHistory.slice(-10), // Keep last 10 messages for context
    { role: "user", content: message },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || "OpenAI API error");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await getOpenAIResponse(message, conversationHistory);
    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get AI response";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
