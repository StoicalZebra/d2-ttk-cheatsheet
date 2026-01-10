import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D2 TTK Cheatsheet | Destiny 2 PVP Weapons Stat Breakpoints",
  description:
    "Destiny 2 PVP TTK breakpoints and weapons stat calculator. Find the optimal weapons stat for faster time-to-kill.",
  keywords: [
    "Destiny 2",
    "PVP",
    "TTK",
    "Time to Kill",
    "Weapons Stat",
    "Breakpoints",
    "Calculator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
