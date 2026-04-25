"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { ChatUI } from "@/components/ui/chatUI";

interface ChatBotOpen {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Chatbot({ isOpen, setIsOpen }: ChatBotOpen & {}) {
  const { messages, sendMessage, isLoading } = useChat([
    {
      role: "assistant",
      content: "Hey! Ask me anything about Luuk and his work 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [showFirstMessage, setShowFirstMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstMessage(true);
    }, 2000); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    const message = input;
    if (!message) return;

    setInput("");
    await sendMessage(message);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        className={`fixed bottom-6 right-6 z-50  w-16 h-16 sm:w-14 sm:h-14 bg-primary rounded-full 
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
          <ChatUI
            setIsOpen={setIsOpen}
            messages={messages}
            isLoading={isLoading}
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            showFirstMessage={showFirstMessage}
          />
        </div>
      )}
      <div className="rounded-2xl border border-border flex flex-col w-full max-h-[600px] bg-card hidden sm:block">
        <ChatUI
          setIsOpen={setIsOpen}
          messages={messages}
          isLoading={isLoading}
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          showFirstMessage={showFirstMessage}
        />
      </div>
    </>
  );
}
