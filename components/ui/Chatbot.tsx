"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! Ask me anything about Luuk and his work 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
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

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later or check your API configuration.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        className=" flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Talk to me!
      </Button>
      <Button
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full border border-accent-blue/30 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-card fixed bottom-20 right-4 w-96 h-[600px] rounded-lg border border-border flex flex-col">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.role === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={`inline-block rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-accent-blue to-accent-purple border border-border"
                      : "border border-border"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-dark-secondary">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 bg-dark-secondary border border-border rounded-lg px-4 py-2"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg border border-border"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
