"use client";

import { useState } from "react";

type Row = { id: number; name: string; phone: string; message: string; createdAt: string };

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const token = btoa(`${username}:${password}`);
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        headers: { Authorization: `Basic ${token}` },
      });
      if (!res.ok) {
        setError("Wrong username or password.");
        setLoading(false);
        return;
      }
      sessionStorage.setItem("adminToken", token);
      const data = await res.json();
      setRows(data.messages ?? []);
      setAuthed(true);
    } catch {
      setError("Could not reach the server.");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    sessionStorage.removeItem("adminToken");
    setAuthed(false);
    setRows([]);
  }

  const input =
    "w-full rounded-2xl border-2 border-sunny bg-white px-4 py-3 font-body placeholder:text-ink/40 focus:border-sky-deep focus:outline-none";

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Admin</h1>

      {!authed ? (
        <form onSubmit={login} className="mx-auto mt-8 max-w-sm space-y-4 rounded-3xl border-4 border-sunny-deep bg-white p-6">
          <div>
            <label htmlFor="adminUser" className="font-display text-ink">
              Username
            </label>
            <input
              id="adminUser"
              className={`${input} mt-1`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adminPass" className="font-display text-ink">
              Password
            </label>
            <input
              id="adminPass"
              type="password"
              className={`${input} mt-1`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error ? <p className="text-sm font-semibold text-candy-deep">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-choco px-8 py-3 font-display text-lg text-white shadow-md transition hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      ) : (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="font-display text-xl text-ink">Contact submissions</p>
            <button
              type="button"
              onClick={logout}
              className="rounded-full bg-candy-deep px-4 py-1.5 text-sm font-display text-ink hover:brightness-95"
            >
              Log out
            </button>
          </div>
          {rows.length === 0 ? (
            <p className="mt-6 text-ink/60">No submissions yet.</p>
          ) : (
            <div className="mt-6 overflow-x-auto rounded-3xl border-4 border-sunny-deep bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-sunny/40 font-display text-ink">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Message</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-sunny/40">
                      <td className="px-4 py-3 text-ink">{r.name}</td>
                      <td className="px-4 py-3 text-ink">{r.phone}</td>
                      <td className="px-4 py-3 text-ink">{r.message}</td>
                      <td className="px-4 py-3 text-ink">{new Date(r.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}