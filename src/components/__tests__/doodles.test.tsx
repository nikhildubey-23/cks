import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SunDoodle, CloudDoodle, DoodleIcon } from "@/components/doodles";

describe("doodles", () => {
  it("renders scene doodles with aria labels", () => {
    render(<SunDoodle />);
    expect(screen.getByLabelText("sun doodle")).toBeInTheDocument();
    render(<CloudDoodle />);
    expect(screen.getByLabelText("cloud doodle")).toBeInTheDocument();
  });

  it("renders any icon by name", () => {
    render(<DoodleIcon name="art" />);
    expect(screen.getByLabelText("art icon")).toBeInTheDocument();
    render(<DoodleIcon name="flag" />);
    expect(screen.getByLabelText("flag icon")).toBeInTheDocument();
  });
});