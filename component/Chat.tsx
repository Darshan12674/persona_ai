"use client";

import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import PersonaSelector from "./PersonaSelector";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { ChatMessage, Persona } from "@/types/chat";

export default function Chat() {
  const [persona, setPersona] =
    useState<Persona>("hitesh");

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
    <div className="max-w-5xl mx-auto h-screen flex flex-col p-6">

      <ChatHeader />

      <PersonaSelector
        persona={persona}
        setPersona={setPersona}
      />

      <div className="flex-1 overflow-y-auto my-6">
        <ChatMessages
          messages={messages}
          loading={loading}
        />

        <div ref={bottomRef} />
      </div>

      <ChatInput
        onSend={sendMessage}
        loading={loading}
      />

    </div>
  );
}