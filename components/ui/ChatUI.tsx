import DotsBounceIcon from "./bouncingDots";
import { Button } from "./button";

interface ChatUIProps {
  messages: Array<{ role: string; content: string }>;
  isLoading: boolean;
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  showFirstMessage: boolean;
}

export function ChatUI({
  messages,
  isLoading,
  input,
  setInput,
  handleSend,
  showFirstMessage,
}: ChatUIProps) {
  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-full">
        {(showFirstMessage ? messages : messages.slice(1)).map(
          (message, index) => (
            <div
              key={index}
              className={message.role === "user" ? "text-right" : "text-left"}
            >
              <div className="inline-block rounded-2xl p-3 border border-border bg-primary/70">
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ),
        )}

        {!showFirstMessage && (
          <div className="text-left">
            <div className="inline-flex rounded-2xl p-3 border border-border bg-primary/70 gap-2">
              <DotsBounceIcon size={20} />
            </div>
          </div>
        )}

        {isLoading && (
          <div className="text-left">
            <div className="inline-flex rounded-2xl p-3 border border-border bg-primary/70 gap-2">
              <DotsBounceIcon size={20} />
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
