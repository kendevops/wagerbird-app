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

const POP6_SCRIPT_SRC = `https://pop6serve.com/popsixle.php?t=9ed022bf44365607240a763124b5af7732d355bc0a219fcd0bfbd5c57960dde5&shop=wagerbird.com`;

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
        <Script
          async
          src="//cdn.trackdesk.com/tracking.js"
          strategy="beforeInteractive"
        />
        <Script id="trackdesk-init" strategy="afterInteractive">
          {`(function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
trackdesk('wagerbird', 'click');`}
        </Script>
      </body>
    </html>
  );
}
