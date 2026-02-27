import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Mughis",
  description: "",
  icons: {
    // Ganti path di bawah dengan file favicon kamu.
    // Letakkan file favicon.ico / favicon.png di folder /public
    icon: "/monkey.ico",
    // Untuk ikon Apple (opsional):
    // apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
