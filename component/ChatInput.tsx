"use client";

import { KeyboardEvent, useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function ChatInput({ onSend, loading }: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    const text = message.trim();

    if (!text || loading) return;

    onSend(text);
    setMessage("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="border-t border-white/10 pt-4">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-3 shadow-inner shadow-black/20">
        <div className="flex items-end gap-3">
          <textarea
            rows={2}
            placeholder="Ask anything..."
            value={message}
            disabled={loading}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[56px] flex-1 resize-none bg-transparent p-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>

        <p className="mt-2 px-2 text-xs text-zinc-500">
          Press Enter to send • Shift + Enter for a new line
        </p>
      </div>
    </div>
  );
}