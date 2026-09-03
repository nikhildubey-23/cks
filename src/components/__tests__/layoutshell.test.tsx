import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAV_LINKS = ["About", "Programs", "Gallery", "Director", "Admissions", "Contact"];

describe("Navbar", () => {
  it("renders all desktop nav links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    for (const label of NAV_LINKS) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });
});

describe("Footer", () => {
  it("shows address and phone", () => {
    render(<Footer />);
    expect(screen.getByText(/Jagmal Chowk/)).toBeInTheDocument();
    expect(screen.getByText(/087199 95554/)).toBeInTheDocument();
  });
});
