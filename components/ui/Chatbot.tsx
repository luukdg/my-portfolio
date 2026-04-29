"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { ChatUI } from "@/components/ui/ChatUI";
import { Card } from "./card";
import { AnimatePresence, motion } from "framer-motion";

const MotionCard = motion(Card);

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
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    const message = input;
    if (!message) return;

    setInput("");
    await sendMessage(message);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Button
        className={`fixed bottom-6 right-6 z-50  w-16 h-16 sm:w-14 sm:h-14 bg-primary rounded-full 
            flex items-center justify-center ${isOpen ? "hidden sm:flex" : "flex"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <MotionCard
            initial={{ scale: 0.95, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{
              scale: 0.95,
              y: 8,
              transition: { duration: 0.1, ease: "easeIn" },
            }}
            transition={{ type: "spring", stiffness: 1000, damping: 50 }}
            style={{ transformOrigin: "bottom right" }} // 👈
            className="pb-0 pt-0 fixed bottom-0 left-0 right-0 h-[90vh] sm:bottom-23
    sm:right-5 sm:left-auto sm:w-96 sm:h-[600px] border border-border flex flex-col z-50 gap-0"
          >
            <ChatUI
              setIsOpen={setIsOpen}
              messages={messages}
              isLoading={isLoading}
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              bottomRef={bottomRef}
            />
          </MotionCard>
        )}
      </AnimatePresence>
    </>
  );
}
