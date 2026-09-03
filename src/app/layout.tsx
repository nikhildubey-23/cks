import type { Metadata } from "next";
import { Fredoka, Baloo_2 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", display: "swap" });
const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", display: "swap" });

export const metadata: Metadata = {
  title: "Chocolate Kids Pre-School — Bilaspur | Where Little Stars Shine!",
  description:
    "Chocolate Kids Pre-School, Jagmal Chowk, Torwa (near Dayalband), Bilaspur. Montessori-based preschool & playgroup since 2013 — 5,000 sq ft campus, play & garden areas, loved by parents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${baloo.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-body text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
