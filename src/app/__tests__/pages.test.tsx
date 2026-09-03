import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "../page";
import AboutPage from "../about/page";
import ProgramsPage from "../programs/page";
import GalleryPage from "../gallery/page";
import AdmissionsPage from "../admissions/page";
import ContactPage from "../contact/page";
import DirectorPage from "../director/page";

describe("HomePage", () => {
  it("renders the hero, tagline and CTA", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /Little Stars/ })).toBeInTheDocument();
    expect(screen.getByText(/बचपन का अनमोल उपहार/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Admissions Open/i })).toBeInTheDocument();
  });
});

describe("AboutPage", () => {
  it("renders story, vision, mission and facilities", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /About Us/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /since 2013/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Our Vision/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Our Mission/ })).toBeInTheDocument();
    expect(screen.getByText("Montessori Wing")).toBeInTheDocument();
  });
});

describe("ProgramsPage", () => {
  it("renders programs, activities, routine and festivals", () => {
    render(<ProgramsPage />);
    expect(screen.getByRole("heading", { name: /Playgroup/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Pre-School/ })).toBeInTheDocument();
    expect(screen.getByText("Nature Walks")).toBeInTheDocument();
    expect(screen.getByText("Diwali")).toBeInTheDocument();
  });
});

describe("GalleryPage", () => {
  it("renders captions for gallery images", () => {
    render(<GalleryPage />);
    expect(screen.getByText(/Our colourful campus/)).toBeInTheDocument();
    expect(screen.getByText(/Finger painting fun/)).toBeInTheDocument();
  });
});

describe("AdmissionsPage", () => {
  it("renders process, timings and inquiry form", () => {
    render(<AdmissionsPage />);
    expect(screen.getByRole("heading", { name: /Admissions/ })).toBeInTheDocument();
    expect(screen.getByText("Enquire")).toBeInTheDocument();
    expect(screen.getByText("9:00 AM – 1:00 PM")).toBeInTheDocument();
    expect(screen.getByLabelText(/child's name/i)).toBeInTheDocument();
  });
});

describe("ContactPage", () => {
  it("renders contact points, timings and map", () => {
    render(<ContactPage />);
    expect(screen.getByText("087199 95554")).toBeInTheDocument();
    expect(screen.getByText("9:00 AM – 1:00 PM")).toBeInTheDocument();
  });
});

describe("DirectorPage", () => {
  it("renders the director's name, role and bio", () => {
    render(<DirectorPage />);
    expect(screen.getByRole("heading", { name: /Our Director/ })).toBeInTheDocument();
    expect(screen.getAllByText(/Saina Ubhrani/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/MD/).length).toBeGreaterThan(0);
    expect(screen.getByText(/joyful and nurturing learning environment/)).toBeInTheDocument();
  });
});
