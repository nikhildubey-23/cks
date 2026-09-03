import { school } from "@/lib/school-data";

export function MapEmbed() {
  const src = `https://www.google.com/maps?q=${school.lat},${school.lng}&z=15&output=embed`;
  return (
    <iframe
      title="Chocolate Kids Pre-School location map"
      src={src}
      width="100%"
      height="380"
      style={{ border: 0, borderRadius: "2rem" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
