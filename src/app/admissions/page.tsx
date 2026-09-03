import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import { DoodleIcon } from "@/components/doodles";
import { school } from "@/lib/school-data";
import { timings } from "@/lib/contact";

const PROGRESS_COLORS = ["bg-sky-deep", "bg-candy-deep", "bg-mint-deep", "bg-sunny-deep"];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="A simple 4-step journey to enrol your little star. We are here to help at every step!"
        gradient="from-sky to-mint"
        doodle="stars"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle eyebrow="How it works" title="Admission process" />
        <div className="grid gap-6 md:grid-cols-4">
          {school.process.map((step, i) => (
            <Card key={step.title} className="text-center">
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${PROGRESS_COLORS[i]} font-display text-ink`}
              >
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{step.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-lilac/40 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Schedule" title="Class timings" />
            <ul className="space-y-3">
              {timings.map((t) => (
                <li key={t.day} className="flex items-center justify-between rounded-2xl bg-white px-5 py-3 shadow-sm">
                  <span className="inline-flex items-center gap-3 font-display text-ink">
                    <DoodleIcon name="clock" className="h-6 w-6" />
                    {t.day}
                  </span>
                  <span className="font-display text-choco">{t.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SectionTitle align="left" eyebrow="Documents" title="What to bring" />
              <ul className="space-y-2">
                {school.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-ink/80">
                    <DoodleIcon name="doc" className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card color="candy" className="h-fit">
            <h2 className="font-display text-3xl text-ink">Start your enquiry</h2>
            <p className="mt-2 text-sm text-ink">
              Fill this in and hit send — your email app opens with your enquiry ready to go.
            </p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}