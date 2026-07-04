import { MessageCircleMore } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/40 px-6 py-10 text-center text-zinc-400">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 text-blue-300">
        <MessageCircleMore size={24} />
      </div>
      <h2 className="mb-2 text-2xl font-semibold text-white">
        Start a conversation
      </h2>
      <p className="max-w-md text-sm leading-6">
        Ask anything about web development, JavaScript, React, backend, AI, or career growth.
      </p>
    </div>
  );
}