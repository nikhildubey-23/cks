"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SunDoodle } from "@/components/doodles";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Director", href: "/director" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-sunny-deep bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <SunDoodle className="h-10 w-10" />
          <span className="font-display text-xl leading-tight text-choco">
            Chocolate <span className="block text-sm tracking-wide text-ink">Kids Pre-School</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 font-display transition hover:bg-sunny ${
                    active ? "bg-sunny text-choco" : "text-ink/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-2xl bg-sky md:hidden"
        >
          <span className={`h-1 w-6 rounded-full bg-choco transition ${open ? "translate-y-2.5 rotate-45" : ""}`} />
          <span className={`h-1 w-6 rounded-full bg-choco transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-1 w-6 rounded-full bg-choco transition ${open ? "-translate-y-2.5 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open ? (
        <ul className="space-y-1 px-5 pb-5 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-white px-4 py-3 font-display text-ink/85 shadow-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
