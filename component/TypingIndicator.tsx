export default function TypingIndicator() {
    return (
        <div className="flex gap-2 px-4 py-3 rounded-xl bg-zinc-800 w-fit">
            <div className="w-2 h-2 rounded-full bg-white animate-bounce" />

            <div
             className="w-2 h-2 rounded-full bg-white animate-bounce"
             style={{ animationDelay: "150ms" }}
             />

              <div
              className="w-2 h-2 rounded-full bg-white animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
        </div>
    )
}