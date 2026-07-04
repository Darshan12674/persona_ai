import { Sparkles } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="border-b border-white/10 pb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 text-blue-300">
          <Sparkles size={20} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Persona AI
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Chat with Hitesh Choudhary or Piyush Garg
          </p>
        </div>
      </div>
    </header>
  );
}