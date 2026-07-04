"use client";

import { ChatMessage as MessageType } from "@/types/chat";
import Message from "./Message";
import EmptyState from "./EmptyState";
import TypingIndicator from "./TypingIndicator";

interface Props {
  messages: MessageType[];
  loading: boolean;
}

export default function ChatMessages({
  messages,
  loading,
}: Props) {
  if (messages.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
        />
      ))}

      {loading && <TypingIndicator />}
    </div>
  );
}