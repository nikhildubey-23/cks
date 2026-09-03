import { SunDoodle, CloudDoodle, BalloonDoodle, RainbowDoodle, StarDoodle, TreeDoodle } from "@/components/doodles";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  gradient?: string;
  doodle?: "sun" | "cloud" | "balloon" | "rainbow" | "stars" | "tree";
};

const DOODLES: Record<string, React.ReactNode> = {
  sun: <SunDoodle className="absolute right-8 top-6 h-20 w-20 animate-floaty opacity-90" />,
  cloud: (
    <>
      <CloudDoodle className="absolute left-8 top-8 h-14 w-20 opacity-90" />
      <CloudDoodle className="absolute right-10 bottom-6 h-10 w-16 opacity-70" />
    </>
  ),
  balloon: <BalloonDoodle className="absolute left-10 top-6 h-24 w-16 animate-floaty opacity-90" />,
  rainbow: <RainbowDoodle className="absolute right-8 top-8 h-16 w-24 opacity-90" />,
  stars: (
    <>
      <StarDoodle className="absolute left-10 top-8 h-8 w-8" />
      <StarDoodle className="absolute right-14 top-6 h-6 w-6" />
      <StarDoodle className="absolute right-24 bottom-6 h-5 w-5" />
    </>
  ),
  tree: <TreeDoodle className="absolute right-10 top-6 h-20 w-16 opacity-90" />,
};

export function PageHeader({ title, subtitle, gradient = "from-sky to-candy", doodle = "sun" }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-r ${gradient} px-6 pb-14 pt-16 text-center`}>
      <div className="dot-pattern absolute inset-0 opacity-30" />
      {DOODLES[doodle]}
      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-ink md:text-6xl">{title}</h1>
        {subtitle ? <p className="mt-4 text-lg text-ink md:text-xl">{subtitle}</p> : null}
      </div>
    </section>
  );
}
