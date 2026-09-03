import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { BalloonDoodle, CloudDoodle, StarDoodle } from "@/components/doodles";
import { director } from "@/lib/school-data";

export default function DirectorPage() {
  return (
    <>
      <PageHeader
        title="Our Director"
        subtitle="Meet the heart that keeps our little stars shining"
        gradient="from-sunny to-candy"
        doodle="balloon"
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative mx-auto w-fit">
          <BalloonDoodle className="absolute -left-14 -top-12 h-16 w-12 animate-floaty opacity-90" />
          <CloudDoodle className="absolute -right-10 -top-6 h-10 w-14 opacity-70" />
          <StarDoodle className="absolute -right-9 top-16 h-8 w-8 animate-floaty" />
          <StarDoodle className="absolute -left-10 bottom-16 h-6 w-6" />

          <div className="h-56 w-56 overflow-hidden rounded-full border-8 border-white shadow-xl transition-transform duration-300 hover:scale-105 sm:h-64 sm:w-64">
            <Image
              src={director.image}
              alt={`Portrait of ${director.name}`}
              width={628}
              height={902}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-choco px-6 py-2 font-display text-lg tracking-wide text-cream shadow-md">
            {director.role}
          </div>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-choco">
            Meet the {director.role}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">{director.name}</h2>
          <p className="mt-2 font-display text-lg text-choco">
            {director.role} · {director.school}
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-sunny-deep bg-white/70 px-5 py-4">
            <p className="text-lg leading-relaxed text-ink">{director.bio}</p>
          </div>

          <p className="mt-8 font-display text-2xl text-choco">
            — {director.name}, {director.role}
          </p>

          <div className="mt-6 flex items-center gap-1.5 text-sunny-deep">
            <StarDoodle className="h-5 w-5" />
            <StarDoodle className="h-3 w-3" />
            <StarDoodle className="h-5 w-5" />
          </div>
        </div>
      </section>
    </>
  );
}