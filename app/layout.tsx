import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  Space_Mono,
  Oswald,
  Barlow_Condensed,
} from "next/font/google";
import "./globals.css";
import DynamicCursor from "@/components/animations/DynamicCursor";
import ConditionalSiteLayout from "@/components/ConditionalSiteLayout";
import PopsixleDevCheck from "@/components/PopsixleDevCheck";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";
import { getSiteMetadata } from "@/sanity/lib/metadata";

const POP6_TRACKING_TOKEN = (
  process.env.NEXT_PUBLIC_POP6_TRACKING_TOKEN ?? ""
).trim();
const POP6_SHOP = (
  process.env.NEXT_PUBLIC_POP6_SHOP ?? "wagerbird.com"
).trim();
const POP6_SCRIPT_SRC =
  POP6_TRACKING_TOKEN.length > 0
    ? `https://pop6serve.com/popsixle.php?t=${encodeURIComponent(POP6_TRACKING_TOKEN)}&shop=${encodeURIComponent(POP6_SHOP)}`
    : null;

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
        <PopsixleDevCheck />
        <ConditionalSiteLayout>{children}</ConditionalSiteLayout>
        {draft?.isEnabled && <VisualEditingWrapper />}
        {POP6_SCRIPT_SRC && (
          <Script
            src={POP6_SCRIPT_SRC}
            strategy="beforeInteractive"
            data-testid="popsixle-script"
          />
        )}
      </body>
    </html>
  );
}
