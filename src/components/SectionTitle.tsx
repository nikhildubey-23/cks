import { StarDoodle } from "@/components/doodles";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow ? (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-choco">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl text-ink md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className={`mt-3 max-w-2xl text-lg text-ink ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      ) : null}
      <div className={`mt-4 flex items-center gap-1.5 text-sunny-deep ${centered ? "justify-center" : ""}`}>
        <StarDoodle className="h-5 w-5" />
        <StarDoodle className="h-3 w-3" />
        <StarDoodle className="h-5 w-5" />
      </div>
    </div>
  );
}
