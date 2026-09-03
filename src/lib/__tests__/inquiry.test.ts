import { describe, expect, it } from "vitest";
import {
  buildContactMailto,
  buildInquiryMailto,
  buildMailto,
  validateContact,
  validateInquiry,
} from "@/lib/inquiry";

const validInquiry = {
  childName: "Aarav",
  parentName: "Meera",
  phone: "9876543210",
  childAge: "3 – 4 years",
  message: "Please share fee details",
};

describe("buildMailto", () => {
  it("encodes subject and body into a mailto URL", () => {
    const url = buildMailto("info@x.in", "Hi there", "line one\nline two");
    expect(url).toBe("mailto:info%40x.in?subject=Hi%20there&body=line%20one%0Aline%20two");
  });
});

describe("buildInquiryMailto", () => {
  it("includes the inquiry details in the body", () => {
    const url = buildInquiryMailto(validInquiry);
    expect(url.startsWith("mailto:info%40chocolatekids.co.in?subject=")).toBe(true);
    const body = decodeURIComponent(url.split("body=")[1]);
    expect(body).toContain("Phone: 9876543210");
    expect(body).toContain("Child's Name: Aarav");
  });
});

describe("buildContactMailto", () => {
  it("includes name and message", () => {
    const url = buildContactMailto({ name: "Raj", phone: "9123456780", message: "Want a campus tour" });
    const body = decodeURIComponent(url.split("body=")[1]);
    expect(body).toContain("Name: Raj");
    expect(body).toContain("Want a campus tour");
  });
});

describe("validateInquiry", () => {
  it("flags missing required fields", () => {
    const errs = validateInquiry({ childName: "", parentName: "", phone: "", childAge: "", message: "" });
    expect(errs.childName).toBeTruthy();
    expect(errs.parentName).toBeTruthy();
    expect(errs.childAge).toBeTruthy();
    expect(errs.phone).toBeTruthy();
  });

  it("rejects an invalid phone number", () => {
    const errs = validateInquiry({ ...validInquiry, phone: "abc" });
    expect(errs.phone).toBeTruthy();
  });

  it("accepts a valid inquiry", () => {
    expect(validateInquiry(validInquiry)).toEqual({});
  });
});

describe("validateContact", () => {
  it("flags missing name and invalid phone", () => {
    const errs = validateContact({ name: "", phone: "x", message: "" });
    expect(errs.name).toBeTruthy();
    expect(errs.phone).toBeTruthy();
  });

  it("accepts a valid contact message", () => {
    expect(validateContact({ name: "Raj", phone: "9123456780", message: "Hi" })).toEqual({});
  });
});
