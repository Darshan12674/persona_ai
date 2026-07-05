"use client";

import { ChatMessage } from "@/types/chat";
import ReactMarkdown from "react-markdown";


interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] sm:max-w-[75%] ${isUser ? "items-end" : "items-start"}`}>
        <div className={`mb-2 text-xs font-medium ${isUser ? "text-right text-zinc-400" : "text-zinc-400"}`}>
          {isUser ? "You" : "Assistant"}
        </div>

        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-7 whitespace-pre-wrap shadow-sm ${
            isUser
              ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
              : "border border-white/10 bg-zinc-900/80 text-zinc-100"
          }`}
        >
          <ReactMarkdown>
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}