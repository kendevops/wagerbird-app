import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Geist, Geist_Mono, Space_Mono, Oswald, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import DynamicCursor from "@/components/animations/DynamicCursor";
import ConditionalSiteLayout from "@/components/ConditionalSiteLayout";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";
import { getSiteMetadata } from "@/sanity/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  return getSiteMetadata();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${oswald.variable} ${barlowCondensed.variable} antialiased`}
      >
        <DynamicCursor />
        <ConditionalSiteLayout>{children}</ConditionalSiteLayout>
        {draft?.isEnabled && <VisualEditingWrapper />}
      </body>
    </html>
  );
}
