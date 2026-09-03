export type GalleryImage = { src: string; alt: string; caption: string; tall?: boolean };

export const galleryImages: GalleryImage[] = [
  { src: "/images/campus-cover.jpg", alt: "Chocolate Kids Pre-School campus banner", caption: "Our colourful campus at Jagmal Chowk, Torwa", tall: true },
  { src: "/images/logo-big.jpg", alt: "Chocolate Kids Pre-School logo", caption: "The Chocolate Kids mascot" },
  { src: "/images/art-finger-painting.png", alt: "Kids doing finger painting", caption: "Finger painting fun" },
  { src: "/images/art-building-blocks.png", alt: "Building blocks play", caption: "Building blocks & jigsaws" },
  { src: "/images/art-make-believe.png", alt: "Make believe games", caption: "Make-believe games" },
  { src: "/images/art-painting.png", alt: "Little artists painting", caption: "Little artists at work" },
  { src: "/images/art-paper-tearing.png", alt: "Paper tearing craft", caption: "Paper tearing & pasting" },
  { src: "/images/art-scribbling.png", alt: "Scribbling boards", caption: "Scribbling boards" },
  { src: "/images/recite-harshleen.jpg", alt: "Hindi recitation winner", caption: "Hindi recitation — Pre-Nursery winner" },
  { src: "/images/recite-2.jpg", alt: "Hindi recitation student", caption: "Hindi recitation — Nursery winner" },
  { src: "/images/recite-3.jpg", alt: "Hindi recitation student", caption: "Hindi recitation — LKG winner" },
  { src: "/images/sports-thumb.jpg", alt: "Annual sports day", caption: "Annual sports day at school" },
];

export const galleryPreview = galleryImages.slice(0, 6);