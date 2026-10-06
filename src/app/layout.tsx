import type { Metadata } from "next";
import { Italiana, Manrope } from "next/font/google";

import "./globals.css";

const displayFont = Italiana({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
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
  icons: { icon: "/images/golden-hour-logo-transparent.png" },
  twitter: { card: "summary_large_image", images: ["/images/golden-hour-logo.png"] },
  openGraph: {
    images: [{ url: "/images/golden-hour-logo.png", alt: "Golden Hour Aesthetics" }],
    title: "Golden Hour Aesthetics",
    description:
      "Natural results, honest advice and client safety at the heart of every treatment.",
    url: "/",
    siteName: "Golden Hour Aesthetics",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: process.env.SITE_INDEXABLE === "true",
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
