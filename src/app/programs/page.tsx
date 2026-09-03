import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { DoodleIcon, StarDoodle } from "@/components/doodles";
import { activities, festivals, programs, routine } from "@/lib/programs";

const PROGRAM_COLORS: Record<string, string> = {
  sky: "border-sky-deep",
  candy: "border-candy-deep",
  mint: "border-mint-deep",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Programs"
        subtitle="Age-appropriate learning journeys, from gentle playgroup to confident Montessori learners."
        gradient="from-candy to-sunny"
        doodle="balloon"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.id} className={`border-t-8 ${PROGRAM_COLORS[p.color] ?? "border-sky-deep"} text-center`}>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow">
                <DoodleIcon name="smile" className="h-10 w-10" />
              </span>
              <h2 className="mt-4 font-display text-2xl text-ink">{p.name}</h2>
              <p className="mt-1 font-display text-sm text-choco">{p.age}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{p.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-mint/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Learn through play" title="A day full of activities" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <Card key={a.name} className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sunny">
                  <DoodleIcon name={a.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{a.name}</h3>
                  <p className="mt-1 text-sm text-ink/80">{a.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Our routine" title="A rhythm kids love" />
            <ol className="space-y-3">
              {routine.map((step, i) => (
                <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-candy-deep font-display text-ink">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionTitle align="left" eyebrow="Celebrations" title="Festivals we share" />
            <div className="flex flex-wrap gap-3">
              {festivals.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-2 font-display text-ink"
                >
                  <StarDoodle className="h-4 w-4" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
