import Link from "next/link";
import { BalloonDoodle, DoodleIcon } from "@/components/doodles";
import { school } from "@/lib/school-data";
import { contactPoints } from "@/lib/contact";

const QUICK_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Photo gallery", href: "/gallery" },
  { label: "Director", href: "/director" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-choco text-cream">
      <BalloonDoodle className="absolute -right-6 -top-8 h-32 w-24 opacity-20" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">{school.name}</h3>
          <p className="mt-2 text-sm text-cream">{school.hindiTagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream">{school.address}</p>
        </div>
        <div>
          <p className="font-display text-xl">Quick links</p>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream/85 underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xl">Say hello</p>
          <ul className="mt-4 space-y-3">
            {contactPoints.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="inline-flex items-center gap-3 text-sm text-cream/85 hover:text-white"
                >
                  <DoodleIcon name={c.icon} className="h-6 w-6" />
                  <span>
                    {c.label}: {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/20 px-6 py-4 text-center text-xs text-cream">
        © {new Date().getFullYear()} {school.name}, Bilaspur. Made with lots of 💛 for little stars.
      </div>
    </footer>
  );
}
