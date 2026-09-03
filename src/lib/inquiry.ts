export type Inquiry = {
  childName: string;
  parentName: string;
  phone: string;
  childAge: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

const INQUIRY_EMAIL = "info@chocolatekids.co.in";
const PHONE_RE = /^[0-9+\-\s]{10,15}$/;

export function buildMailto(to: string, subject: string, body: string): string {
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildInquiryMailto(inquiry: Inquiry): string {
  const body = [
    `Child's Name: ${inquiry.childName}`,
    `Parent's Name: ${inquiry.parentName}`,
    `Phone: ${inquiry.phone}`,
    `Age Group: ${inquiry.childAge}`,
    `Message: ${inquiry.message || "-"}`,
  ].join("\n");
  return buildMailto(INQUIRY_EMAIL, `Admission Inquiry – ${inquiry.childName}`, body);
}

export function buildContactMailto(details: { name: string; phone: string; message: string }): string {
  const body = [`Name: ${details.name}`, `Phone: ${details.phone}`, `Message: ${details.message}`].join("\n");
  return buildMailto(INQUIRY_EMAIL, "Website Contact Message", body);
}

export function validateInquiry(data: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!data.childName.trim()) errors.childName = "Please enter the child's name";
  if (!data.parentName.trim()) errors.parentName = "Please enter the parent's name";
  if (!PHONE_RE.test(data.phone.trim())) errors.phone = "Enter a valid 10-digit phone number";
  if (!data.childAge.trim()) errors.childAge = "Please select an age group";
  return errors;
}

export function validateContact(data: { name: string; phone: string; message: string }): {
  name?: string;
  phone?: string;
  message?: string;
} {
  const errors: { name?: string; phone?: string; message?: string } = {};
  if (!data.name.trim()) errors.name = "Please enter your name";
  if (!PHONE_RE.test(data.phone.trim())) errors.phone = "Enter a valid phone number";
  if (!data.message.trim()) errors.message = "Please write a short message";
  return errors;
}
