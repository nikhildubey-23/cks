import { describe, expect, it } from "vitest";

describe("test tooling", () => {
  it("runs vitest with jsdom", () => {
    expect(typeof window).toBe("object");
    expect(1 + 1).toBe(2);
  });
});
