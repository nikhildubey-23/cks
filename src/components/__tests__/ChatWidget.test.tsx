import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { ChatWidget } from "@/components/ChatWidget";

describe("ChatWidget", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders a chat button", () => {
    render(<ChatWidget />);
    expect(screen.getByRole("button", { name: /open chat/i })).toBeInTheDocument();
  });

  it("opens the chat panel when button is clicked", async () => {
    const user = userEvent.setup();
    render(<ChatWidget />);
    await user.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByText(/ask me anything/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/chat message/i)).toBeInTheDocument();
  });

  it("shows quick question buttons", async () => {
    const user = userEvent.setup();
    render(<ChatWidget />);
    await user.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByRole("button", { name: /what programs/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /what are your timings/i })).toBeInTheDocument();
  });

  it("sends a message and displays the reply", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ reply: "We are in Bilaspur!" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const user = userEvent.setup();
    render(<ChatWidget />);
    await user.click(screen.getByRole("button", { name: /open chat/i }));
    await user.type(screen.getByLabelText(/chat message/i), "Where are you located?");
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByText(/bilaspur/i)).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledWith("/api/chat", expect.objectContaining({ method: "POST" }));
  });

  it("closes the chat panel when close is clicked", async () => {
    const user = userEvent.setup();
    render(<ChatWidget />);
    await user.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByText(/ask me anything/i)).toBeInTheDocument();
    // Click the ✕ inside the panel header (exact match: "Close chat" not "Close chat widget")
    const closeBtn = screen.getAllByRole("button").find(
      (b) => b.getAttribute("aria-label") === "Close chat",
    );
    expect(closeBtn).toBeTruthy();
    await user.click(closeBtn!);
    expect(screen.queryByText(/ask me anything/i)).not.toBeInTheDocument();
  });
});
