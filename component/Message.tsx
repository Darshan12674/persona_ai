"use client";

import { ChatMessage } from "@/types/chat";

interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex mb-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="max-w-3xl">

        <div className="text-xs text-zinc-400 mb-2">
          {isUser ? "👤 You" : "🤖 Assistant"}
        </div>

        <div
          className={`rounded-2xl px-5 py-4 whitespace-pre-wrap leading-7 ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-100"
          }`}
        >
          {message.content}
        </div>

      </div>
    </div>
  );
}