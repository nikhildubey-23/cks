import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { DoodleIcon } from "@/components/doodles";
import { contactPoints, timings } from "@/lib/contact";
import { school } from "@/lib/school-data";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="We would love to hear from you — call, message or drop by!"
        gradient="from-sunny to-candy"
        doodle="cloud"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactPoints.map((c) => (
            <Card key={c.label} className="text-center">
              <a href={c.href} className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sunny">
                  <DoodleIcon name={c.icon} className="h-8 w-8" />
                </span>
                <p className="font-display text-lg text-ink">{c.label}</p>
                <p className="text-sm text-choco">{c.value}</p>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Drop us a line" title="Send a message" />
            <Card color="sky">
              <ContactForm />
            </Card>
          </div>
          <div>
            <SectionTitle align="left" eyebrow="Find us" title="Location & timings" />
            <Card color="mint" className="mb-6">
              <ul className="space-y-3">
                {timings.map((t) => (
                  <li key={t.day} className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 font-display text-ink">
                      <DoodleIcon name="clock" className="h-6 w-6" />
                      {t.day}
                    </span>
                    <span className="font-display text-choco">{t.hours}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 pt-2 text-sm text-ink">
                  <DoodleIcon name="pin" className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{school.address}</span>
                </li>
              </ul>
            </Card>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
