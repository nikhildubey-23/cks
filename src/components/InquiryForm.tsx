"use client";

import { useState } from "react";
import { DoodleIcon } from "@/components/doodles";
import { buildInquiryMailto, validateInquiry, type Inquiry } from "@/lib/inquiry";

const EMPTY: Inquiry = { childName: "", parentName: "", phone: "", childAge: "", message: "" };

export function InquiryForm() {
  const [data, setData] = useState<Inquiry>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Inquiry, string>>>({});
  const [sent, setSent] = useState(false);

  function handleChange(field: keyof Inquiry, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateInquiry(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    window.location.href = buildInquiryMailto(data);
    setSent(true);
  }

  const err = (field: keyof Inquiry) =>
    errors[field] ? <p className="mt-1 text-sm font-semibold text-candy-deep">{errors[field]}</p> : null;

  const input =
    "w-full rounded-2xl border-2 border-sunny bg-white px-4 py-3 font-body placeholder:text-ink/40 focus:border-sky-deep focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="childName" className="font-display text-ink">
            Child&apos;s name
          </label>
          <input
            id="childName"
            className={`${input} mt-1`}
            value={data.childName}
            onChange={(e) => handleChange("childName", e.target.value)}
            aria-invalid={Boolean(errors.childName)}
          />
          {err("childName")}
        </div>
        <div>
          <label htmlFor="parentName" className="font-display text-ink">
            Parent&apos;s name
          </label>
          <input
            id="parentName"
            className={`${input} mt-1`}
            value={data.parentName}
            onChange={(e) => handleChange("parentName", e.target.value)}
            aria-invalid={Boolean(errors.parentName)}
          />
          {err("parentName")}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-display text-ink">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={`${input} mt-1`}
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="childAge" className="font-display text-ink">
            Age group
          </label>
          <select
            id="childAge"
            className={`${input} mt-1`}
            value={data.childAge}
            onChange={(e) => handleChange("childAge", e.target.value)}
            aria-invalid={Boolean(errors.childAge)}
          >
            <option value="">Select age group</option>
            <option>1.5 – 2.5 years</option>
            <option>2.5 – 3.5 years</option>
            <option>3.5 – 5.5 years</option>
          </select>
          {err("childAge")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-display text-ink">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${input} mt-1`}
          value={data.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 rounded-full bg-choco px-8 py-3 font-display text-lg text-white shadow-md transition hover:scale-105"
      >
        <DoodleIcon name="mail" className="h-6 w-6" />
        {sent ? "Enquiry ready — check your email app!" : "Send enquiry"}
      </button>

      <p className="text-sm text-ink">
        Submitting opens your email app with the enquiry ready to send to {`${"info@chocolatekids.co.in"}`}.
        Prefer to talk? Call us at 087199 95554.
      </p>
    </form>
  );
}