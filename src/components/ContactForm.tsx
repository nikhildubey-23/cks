"use client";

import { useState } from "react";
import { validateContact } from "@/lib/inquiry";

export function ContactForm() {
  const [data, setData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string; form?: string }>({});
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateContact(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const body = await res.json().catch(() => ({}));
        setErrors(body.errors ?? { form: "Could not send your message. Please try again later." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again later." });
    }
  }

  const input =
    "w-full rounded-2xl border-2 border-sunny bg-white px-4 py-3 font-body placeholder:text-ink/40 focus:border-sky-deep focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="cName" className="font-display text-ink">
          Your name
        </label>
        <input
          id="cName"
          className={`${input} mt-1`}
          value={data.name}
          onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p className="mt-1 text-sm font-semibold text-candy-deep">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="cPhone" className="font-display text-ink">
          Phone
        </label>
        <input
          id="cPhone"
          type="tel"
          className={`${input} mt-1`}
          value={data.phone}
          onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <p className="mt-1 text-sm font-semibold text-candy-deep">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="cMessage" className="font-display text-ink">
          Message
        </label>
        <textarea
          id="cMessage"
          rows={4}
          className={`${input} mt-1`}
          value={data.message}
          onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="mt-1 text-sm font-semibold text-candy-deep">{errors.message}</p> : null}
      </div>
      <button
        type="submit"
        className="rounded-full bg-choco px-8 py-3 font-display text-lg text-white shadow-md transition hover:scale-105"
      >
        {sent ? "Message sent — thank you!" : "Send message"}
      </button>
      {errors.form ? <p className="text-sm font-semibold text-candy-deep">{errors.form}</p> : null}
    </form>
  );
}
