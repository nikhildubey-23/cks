"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
};

export function Lightbox({ images, index, onClose }: LightboxProps) {
  const [i, setI] = useState(index ?? 0);

  useEffect(() => {
    if (index !== null) setI(index);
  }, [index]);

  const next = useCallback(() => setI((v) => (v + 1) % images.length), [images.length]);
  const prev = useCallback(() => setI((v) => (v - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, next, prev]);

  if (index === null) return null;
  const img = images[i];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/90 p-6"
      role="dialog"
      aria-modal="true"
      aria-label={img.caption}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-xl text-choco shadow"
      >
        ✕
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white font-display text-xl text-choco shadow"
      >
        ‹
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={img.alt} className="max-h-[70vh] w-auto rounded-3xl border-8 border-white object-contain" />
        <figcaption className="mt-4 rounded-full bg-white/90 px-5 py-2 font-display text-ink">
          {img.caption} <span className="text-choco">({i + 1}/{images.length})</span>
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white font-display text-xl text-choco shadow"
      >
        ›
      </button>
    </div>
  );
}
