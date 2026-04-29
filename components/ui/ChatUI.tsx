import { MessageCircle, ChevronDown } from "lucide-react";
import DotsBounceIcon from "./bouncingDots";
import { Button } from "./button";
import { motion } from "framer-motion";

interface ChatUIProps {
  messages: Array<{ role: string; content: string }>;
  isLoading: boolean;
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  setIsOpen: (isOpen: boolean) => void;
  bottomRef: React.RefObject<HTMLDivElement>;
}

export function ChatUI({
  messages,
  isLoading,
  input,
  setInput,
  handleSend,
  setIsOpen,
  bottomRef,
}: ChatUIProps) {
  return (
    <>
      {/* Messages */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Ask me anything</span>
        </div>
        <Button variant="ghost" onClick={() => setIsOpen(false)}>
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.role === "user" ? "text-right" : "text-left"}
          >
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              style={{
                transformOrigin:
                  message.role === "user" ? "bottom right" : "bottom left",
              }}
              className={`inline-block rounded-2xl p-3 border border-border 
      bg-primary/70 max-w-[90%]
      ${message.role === "user" ? "bg-secondary" : ""}`}
            >
              <p className="text-sm">{message.content}</p>
            </motion.div>
            <div ref={bottomRef} />
          </div>
        ))}

        {isLoading && (
          <div className="text-left">
            <div className="inline-flex rounded-2xl p-3 border border-border bg-primary/70 gap-2">
              <DotsBounceIcon />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-dark-secondary">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-dark-secondary border border-border rounded-2xl px-4 py-2"
          />

          <Button
            variant="secondary"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 border border-border"
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
