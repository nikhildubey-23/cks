import Link from "next/link";

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
};

const STYLES: Record<string, string> = {
  choco: "bg-choco text-white hover:bg-choco/90",
  sunny: "bg-sunny-deep text-ink hover:brightness-95",
  candy: "bg-candy-deep text-ink hover:brightness-95",
  mint: "bg-mint-deep text-ink hover:brightness-95",
  sky: "bg-sky-deep text-ink hover:brightness-95",
};

export function PillButton({ href, children, color = "choco", className = "" }: PillButtonProps) {
  const cls = `inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-lg shadow-md transition-all duration-200 hover:scale-105 hover:animate-wiggle ${STYLES[color] ?? STYLES.choco} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
