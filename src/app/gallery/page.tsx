"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Lightbox } from "@/components/Lightbox";
import { galleryImages } from "@/lib/gallery";

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A peek into our fun-filled days — click any photo to view it big."
        gradient="from-candy to-lilac"
        doodle="rainbow"
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((img, idx) => (
            <button
              type="button"
              key={img.src}
              onClick={() => setOpen(idx)}
              className="group relative overflow-hidden rounded-[2rem] border-4 border-white text-left shadow-md transition hover:scale-[1.02]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={img.tall ? 1100 : 600}
                className={`w-full object-cover ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-3 pt-8 font-display text-sm text-white opacity-0 transition group-hover:opacity-100">
                {img.caption}
              </span>
            </button>
          ))}
        </div>
      </section>
      <Lightbox images={galleryImages} index={open} onClose={() => setOpen(null)} />
    </>
  );
}
