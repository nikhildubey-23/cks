import Image from "next/image";
import { PillButton } from "@/components/PillButton";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { BalloonDoodle, CloudDoodle, DoodleIcon, RainbowDoodle, SunDoodle, TreeDoodle } from "@/components/doodles";
import { school } from "@/lib/school-data";
import { activities } from "@/lib/programs";
import { galleryPreview } from "@/lib/gallery";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky via-sunny to-candy">
        <div className="dot-pattern absolute inset-0 opacity-40" />
        <CloudDoodle className="absolute left-[6%] top-10 h-12 w-20 opacity-90 animate-floaty" />
        <SunDoodle className="absolute right-[8%] top-8 h-20 w-20 animate-floaty" />
        <BalloonDoodle className="absolute left-[12%] bottom-8 h-24 w-16 animate-floaty" />
        <TreeDoodle className="absolute right-[16%] bottom-0 h-20 w-16 opacity-90" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-choco">
              Est. {school.established} · Bilaspur
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
              {school.tagline}
            </h1>
            <p className="mt-4 text-xl text-choco">{school.hindiTagline}</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
              A joyful Montessori preschool at Jagmal Chowk, Torwa — nurturing curious little stars since 2013 on a
              5,000 sq ft campus with play areas, gardens and the warmest teachers in Bilaspur.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PillButton href="/admissions" color="choco">
                Admissions Open →
              </PillButton>
              <PillButton href="/gallery" color="sunny">
                See the fun
              </PillButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
              <Image
                src={galleryPreview[0].src}
                alt={galleryPreview[0].alt}
                width={800}
                height={1423}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <RainbowDoodle className="absolute -bottom-6 -left-8 h-20 w-28" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-8 max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] border-4 border-sunny-deep bg-white p-6 md:grid-cols-4">
          {school.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl text-choco md:text-3xl">{stat.value}</p>
              <p className="text-sm text-ink/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Why families choose us"
          title="What makes us special"
          subtitle="Every day is a colourful adventure in learning, kindness and play."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {school.highlights.map((h, i) => (
            <Card key={h.title} color={["sky", "candy", "mint", "lilac"][i % 4]} className="text-center">
              <DoodleIcon name={["smile", "blocks", "leaf", "flag"][i % 4]} className="mx-auto h-12 w-12" />
              <h3 className="mt-3 font-display text-xl text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{h.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-sunny/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="A day full of wonder" title="Activities our kids love" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <Card key={a.name} className="flex items-start gap-4">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-activity-${a.color}`}>
                  <DoodleIcon name={a.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{a.name}</h3>
                  <p className="mt-1 text-sm text-ink/80">{a.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PillButton href="/programs" color="mint">
              Explore programs →
            </PillButton>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Peek inside" title="Moments of magic" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryPreview.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-[2rem] border-4 border-white shadow-md transition hover:scale-[1.03]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="h-44 w-full object-cover md:h-56"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <PillButton href="/gallery" color="candy">
            View full gallery →
          </PillButton>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-lilac/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle eyebrow="Kind words" title="Why parents love us" />
          <div className="grid gap-6 md:grid-cols-3">
            {school.testimonials.map((t) => (
              <Card key={t.quote} color="white" className="flex flex-col">
                <SunDoodle className="h-8 w-8 text-sunny-deep" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-choco">{t.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-candy to-sky px-8 py-14 text-center">
          <BalloonDoodle className="absolute left-6 top-4 h-20 w-14 animate-floaty" />
          <BalloonDoodle className="absolute right-8 bottom-4 h-14 w-10 animate-floaty" />
          <h2 className="font-display text-3xl text-ink md:text-5xl">Ready to meet your little star?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink/80">
            Book a visit or start an admission enquiry. We would love to welcome you to Chocolate Kids!
          </p>
          <div className="mt-8 flex justify-center">
            <PillButton href="/admissions" color="choco">
              Start admission enquiry
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
