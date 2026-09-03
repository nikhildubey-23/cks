import { PillButton } from "@/components/PillButton";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { DoodleIcon, TreeDoodle } from "@/components/doodles";
import { school } from "@/lib/school-data";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="A safe, joyful home for little learners — story, values and the places they love."
        gradient="from-mint to-sky"
        doodle="tree"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <SectionTitle align="left" eyebrow="Our story" title="A child's dreamland since 2013" />
            <p className="text-lg leading-relaxed text-ink/80">{school.story}</p>
            <div className="mt-8">
              <PillButton href="/admissions" color="mint">
                Come visit us →
              </PillButton>
            </div>
          </div>
          <TreeDoodle className="hidden h-48 w-40 md:block" />
        </div>
      </section>

      <section className="bg-sunny/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card color="candy" className="text-center">
              <h2 className="font-display text-3xl text-ink">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">{school.vision}</p>
            </Card>
            <Card color="sky" className="text-center">
              <h2 className="font-display text-3xl text-ink">Our Mission</h2>
              <ul className="mt-4 space-y-3 text-left">
                {school.mission.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-ink">
                    <DoodleIcon name="check" className="mt-1 h-5 w-5 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="A campus made for childhood"
          title="Facilities our kids enjoy"
          subtitle="Everything is designed with the child at the center."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {school.facilities.map((f) => (
            <Card key={f.name} className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sunny">
                <DoodleIcon name={f.icon} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">{f.name}</h3>
                <p className="mt-1 text-sm text-ink/80">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}