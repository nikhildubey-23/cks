type CardProps = { children: React.ReactNode; className?: string; color?: string };

const TINTS: Record<string, string> = {
  white: "bg-white",
  sky: "bg-sky",
  candy: "bg-candy",
  mint: "bg-mint",
  sunny: "bg-sunny",
  lilac: "bg-lilac",
};

export function Card({ children, className = "", color = "white" }: CardProps) {
  return (
    <div
      className={`rounded-[2rem] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.07)] ${TINTS[color] ?? TINTS.white} ${className}`}
    >
      {children}
    </div>
  );
}
