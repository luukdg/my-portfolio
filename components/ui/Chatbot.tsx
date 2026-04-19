"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { MessageCircle, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
  const bottomRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <>
      {/* Floating Button */}
      <Button onClick={() => setIsOpen(!isOpen)}>Ask my AI anything 👋</Button>
      <Button
        className={`fixed bottom-6 right-6 z-50  w-16 h-16 sm:w-14 sm:h-14 bg-primary/50 rounded-full 
            flex items-center justify-center ${isOpen ? "hidden sm:flex" : "flex"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="bg-card fixed bottom-0 left-0 right-0 h-[90vh] rounded-t-4xl sm:bottom-22
        sm:right-4 sm:left-auto sm:w-96 sm:h-[600px] sm:rounded-4xl border border-border flex flex-col z-50"
        >
          {/* 👇 Header toevoegen */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Ask me anything</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.role === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={`inline-block rounded-2xl p-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-accent-blue to-accent-purple border border-border bg-primary"
                      : "border border-border bg-primary/25"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && <Skeleton className="h-12 w-full" />}
            <div ref={bottomRef} />
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
                className="flex-1 bg-dark-secondary border border-border rounded-2xl px-4 py-2"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl border border-border"
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
