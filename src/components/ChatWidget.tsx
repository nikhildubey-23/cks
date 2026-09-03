"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

const QUICK_QUESTIONS = [
  "What programs do you offer?",
  "What are your timings?",
  "Where are you located?",
  "How do I apply for admission?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo?.({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data.reply ?? "Sorry, I couldn't reach the assistant right now.";
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[26rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border-2 border-sky-deep bg-cream shadow-2xl">
          <div className="flex items-center justify-between bg-choco px-4 py-3 text-cream">
            <p className="font-display text-lg">Chat with us 💬</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full bg-cream/20 px-2 py-0.5 text-sm leading-none hover:bg-cream/30"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-2 overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <>
                <p className="rounded-2xl bg-white px-3 py-2 text-sm text-ink shadow-sm">
                  Hi! 👋 Ask me anything about Chocolate Kids Pre-School.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-full bg-sky/70 px-3 py-1 text-xs text-ink hover:bg-sky"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    m.role === "user" ? "bg-choco text-cream" : "bg-white text-ink"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <p className="rounded-2xl bg-white px-3 py-2 text-sm text-ink/60 shadow-sm">Typing…</p>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-sunny bg-white px-3 py-2"
          >
            <input
              aria-label="Chat message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about school…"
              className="min-w-0 flex-1 rounded-full border-2 border-sunny bg-cream px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-sky-deep focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-sunny-deep px-4 py-2 font-display text-sm text-ink shadow hover:brightness-95 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat widget" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-choco text-2xl text-cream shadow-xl transition hover:scale-110"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
