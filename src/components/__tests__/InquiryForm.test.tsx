import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { InquiryForm } from "@/components/InquiryForm";
import { ContactForm } from "@/components/ContactForm";

describe("InquiryForm", () => {
  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<InquiryForm />);
    await user.click(screen.getByRole("button", { name: /Send enquiry/i }));
    expect(await screen.findByText(/Please enter the child's name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter the parent's name/i)).toBeInTheDocument();
    expect(screen.getByText(/valid 10-digit phone number/i)).toBeInTheDocument();
  });

  it("opens mailto on valid submit", async () => {
    const user = userEvent.setup();
    const original = window.location.href;
    Object.defineProperty(window, "location", { value: { href: "" }, writable: true });
    render(<InquiryForm />);
    await user.type(screen.getByLabelText(/child's name/i), "Aarav");
    await user.type(screen.getByLabelText(/parent's name/i), "Meera");
    await user.type(screen.getByLabelText(/phone/i), "9876543210");
    await user.selectOptions(screen.getByLabelText(/age group/i), "2.5 – 3.5 years");
    await user.click(screen.getByRole("button", { name: /Send enquiry/i }));
    expect(window.location.href).toContain("mailto:info%40chocolatekids.co.in");
    expect(window.location.href).toContain("Child");
      Object.defineProperty(window, "location", { value: { href: original }, writable: true });
  });
});

describe("ContactForm", () => {
  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /Send message/i }));
    expect(await screen.findByText(/enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/valid phone number/i)).toBeInTheDocument();
  });
});