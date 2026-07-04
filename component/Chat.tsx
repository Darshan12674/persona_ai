"use client";

import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import PersonaSelector from "./PersonaSelector";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { ChatMessage, Persona } from "@/types/chat";

export default function Chat() {
  const [persona, setPersona] = useState<Persona>("hitesh");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const userMessage: ChatMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          persona,
          message: text,
          history: updatedMessages,
        }),
      });

      const data = await response.json();

      const assistant: ChatMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistant]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto flex h-screen max-w-6xl flex-col px-3 py-3 sm:px-6 sm:py-6">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/80 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex min-h-0 flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
          <ChatHeader />

          <PersonaSelector persona={persona} setPersona={setPersona} />

          <div className="mt-3 min-h-0 flex-1 overflow-y-auto rounded-3xl border border-white/5 bg-zinc-900/40 px-2 py-2 sm:px-3 sm:py-3">
            <ChatMessages messages={messages} loading={loading} />
            <div ref={bottomRef} />
          </div>

          <ChatInput onSend={sendMessage} loading={loading} />
        </div>
      </div>
    </div>
  );
}