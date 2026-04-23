// hooks/useChat.ts
import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function useChat(initialMessages: Message[]) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (input: string) => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) throw new Error("Failed");

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, setMessages, sendMessage, isLoading };
}
