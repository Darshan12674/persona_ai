export default function TypingIndicator() {
  return (
    <div className="mb-4 flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-sm">
      <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-white" />
      <div
        className="h-2.5 w-2.5 animate-bounce rounded-full bg-white"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="h-2.5 w-2.5 animate-bounce rounded-full bg-white"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}