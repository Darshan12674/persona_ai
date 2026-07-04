"use client"

import { useState, KeyboardEvent } from "react"
import { text } from "stream/consumers"

interface ChatInputProps {
    onSend: (message: string) => void
    loading: boolean
}

export default function ChatInput ({
    onSend,
    loading
}: ChatInputProps) {
    const  [message, setMessage] = useState("")

    function handleSend(){
        const text = message.trim()

        if(!text || loading) return

        onSend(text)
        setMessage("")
    }

    function handleKeyDown(
        e: KeyboardEvent<HTMLTextAreaElement>
    ) {
        if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

     return (
    <div className="border-t border-zinc-800 pt-4">
      <div className="flex gap-3">

        <textarea
          rows={2}
          placeholder="Ask anything..."
          value={message}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 p-4 resize-none outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>

      </div>
    </div>
  );

    
}