import { Skeleton } from "@/components/ui/skeleton";

interface ChatUIProps {
  messages: Array<{ role: string; content: string }>;
  isLoading: boolean;
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  bottomRef: React.RefObject<HTMLDivElement>;
}

export function ChatUI({
  messages,
  isLoading,
  input,
  setInput,
  handleSend,
  bottomRef,
}: ChatUIProps) {
  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.role === "user" ? "text-right" : "text-left"}
          >
            <div className="inline-block rounded-2xl p-3 border border-border bg-primary/25">
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
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-dark-secondary border border-border rounded-2xl px-4 py-2"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl border border-border"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
