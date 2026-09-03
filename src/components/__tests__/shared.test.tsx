import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { PillButton } from "@/components/PillButton";
import { PageHeader } from "@/components/PageHeader";

describe("shared UI", () => {
  it("Card renders children", () => {
    render(<Card color="sky">Hello card</Card>);
    expect(screen.getByText("Hello card")).toBeInTheDocument();
  });

  it("SectionTitle renders title and subtitle", () => {
    render(<SectionTitle eyebrow="Our story" title="Big Title" subtitle="Small sub" />);
    expect(screen.getByText("Big Title")).toBeInTheDocument();
    expect(screen.getByText("Small sub")).toBeInTheDocument();
    expect(screen.getByText("Our story")).toBeInTheDocument();
  });

  it("PillButton renders a link with its href", () => {
    render(<PillButton href="/admissions">Enquire Now</PillButton>);
    const link = screen.getByText("Enquire Now").closest("a");
    expect(link).toHaveAttribute("href", "/admissions");
  });

  it("PageHeader renders title and doodle", () => {
    render(<PageHeader title="Programs" subtitle="Learn with joy" />);
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByLabelText("sun doodle")).toBeInTheDocument();
  });
});
