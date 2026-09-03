import { NextRequest } from "next/server";
import { createDb } from "@/db";
import { contactMessages } from "@/db/schema";
import { validateContact } from "@/lib/inquiry";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ errors: { form: "Invalid submission" } }, { status: 400 });
  }

  const data = { name: body?.name ?? "", phone: body?.phone ?? "", message: body?.message ?? "" };
  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  try {
    const db = createDb();
    await db.insert(contactMessages).values({
      name: data.name.trim(),
      phone: data.phone.trim(),
      message: data.message.trim(),
    });
    return Response.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Contact insert error:", err);
    return Response.json({ errors: { form: "Could not save your message. Please try again later." } }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  const expectedUser = process.env.ADMIN_USER ?? "admin";
  const expectedPass = process.env.ADMIN_PASS ?? "admin123";
  const expected = "Basic " + Buffer.from(`${expectedUser}:${expectedPass}`).toString("base64");

  if (auth !== expected) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = createDb();
    const messages = await db.select().from(contactMessages).orderBy(contactMessages.createdAt).limit(500);
    return Response.json({ messages });
  } catch (err) {
    console.error("Contact list error:", err);
    return Response.json({ error: "Could not fetch messages" }, { status: 500 });
  }
}
