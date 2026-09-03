import { school } from "@/lib/school-data";
import { programs, activities } from "@/lib/programs";
import { contactPoints, timings } from "@/lib/contact";

export function buildChatContext(): string {
  const lines: string[] = [];
  lines.push(`School name: ${school.name}`);
  lines.push(`Tagline: ${school.tagline}`);
  lines.push(`Hindi tagline: ${school.hindiTagline}`);
  lines.push(`Established: ${school.established}`);
  lines.push(`Area: ${school.areaSqFt}`);
  lines.push(`Rating: ${school.rating}`);
  lines.push(`Address: ${school.address}`);

  const contact = contactPoints.map((c) => `${c.label}: ${c.value}`).join(" | ");
  lines.push(`Contact: ${contact}`);
  lines.push(`Timings: ${timings.map((t) => `${t.day} ${t.hours}`).join("; ")}`);

  lines.push(`Story: ${school.story}`);
  lines.push(`Vision: ${school.vision}`);
  lines.push(`Mission: ${school.mission.join("; ")}`);

  const facilities = school.facilities.map((f) => `${f.name} — ${f.desc}`).join("; ");
  lines.push(`Facilities: ${facilities}`);

  const process = school.process.map((p) => `${p.title} — ${p.desc}`).join("; ");
  lines.push(`Admission process: ${process}`);
  const docs = school.documents.join(", ");
  lines.push(`Documents needed: ${docs}`);

  const prog = programs.map((p) => `${p.name} (${p.age}) — ${p.desc}`).join("; ");
  lines.push(`Programs: ${prog}`);
  const act = activities.map((a) => `${a.name} — ${a.desc}`).join("; ");
  lines.push(`Activities: ${act}`);

  if (school.stats?.length) {
    lines.push(`Stats: ${school.stats.map((s) => `${s.value} ${s.label}`).join("; ")}`);
  }

  return lines.join("\n");
}

export const CHAT_SYSTEM_PROMPT = `You are the helpful assistant for Chocolate Kids Pre-School, a Montessori preschool in Bilaspur, India.
Answer questions ONLY using the school facts provided in the context below. Be warm, friendly and concise (2-4 sentences).
If a question is not about the school or the answer is not in the context, politely say you're not sure and suggest calling or visiting the school.
Never invent facts such as fees, phone numbers, timings, or policies that are not in the context.
If asked about fees or anything not listed, say fees are best confirmed by calling the school directly.

SCHOOL FACTS:
${buildChatContext()}`;
