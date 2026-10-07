import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";

import "./globals.css";

const displayFont = Lora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenhouraesthetics.co.uk"),
  title: {
    default: "Golden Hour Aesthetics | Darley Abbey, Derby",
    template: "%s | Golden Hour Aesthetics",
  },
  description:
    "Natural, ethical and evidence-based aesthetic treatments in Darley Abbey, Derby, including dermal fillers, botulinum toxin, skin boosters and polynucleotides.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Golden Hour Aesthetics",
    description:
      "Natural results, honest advice and client safety at the heart of every treatment.",
    url: "/",
    siteName: "Golden Hour Aesthetics",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
