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
    <div className="mt-5 mb-4 flex flex-wrap gap-3">
      <button
        onClick={() => setPersona("hitesh")}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
          persona === "hitesh"
            ? "border-blue-500/50 bg-blue-600/20 text-blue-200 shadow-inner shadow-blue-500/10"
            : "border-white/10 bg-zinc-900/70 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800"
        }`}
      >
        ☕ Hitesh Choudhary
      </button>

      <button
        onClick={() => setPersona("piyush")}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
          persona === "piyush"
            ? "border-fuchsia-500/50 bg-fuchsia-600/20 text-fuchsia-200 shadow-inner shadow-fuchsia-500/10"
            : "border-white/10 bg-zinc-900/70 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800"
        }`}
      >
        🚀 Piyush Garg
      </button>
    </div>
  );
}