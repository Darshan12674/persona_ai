"use client";

import { Persona } from "@/types/chat";

interface Props {
  persona: Persona;
  setPersona: (value: Persona) => void;
}

export default function PersonaSelector({
  persona,
  setPersona,
}: Props) {
  return (
    <div className="flex gap-4 mt-6 mb-6">
      <button
        onClick={() => setPersona("hitesh")}
        className={`rounded-xl px-5 py-3 transition font-medium ${
          persona === "hitesh"
            ? "bg-blue-600 text-white"
            : "bg-zinc-800 hover:bg-zinc-700"
        }`}
      >
        ☕ Hitesh Choudhary
      </button>

      <button
        onClick={() => setPersona("piyush")}
        className={`rounded-xl px-5 py-3 transition font-medium ${
          persona === "piyush"
            ? "bg-blue-600 text-white"
            : "bg-zinc-800 hover:bg-zinc-700"
        }`}
      >
        🚀 Piyush Garg
      </button>
    </div>
  );
}