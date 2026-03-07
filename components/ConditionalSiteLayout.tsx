"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const STUDIO_PATH = "/studio";

export default function ConditionalSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith(STUDIO_PATH) ?? false;

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header
        navLinks={[
          { label: "Terminal", href: "/terminal" },
          { label: "Hotsheet", href: "/hotsheet" },
          { label: "Sportsbooks", href: "/sportsbooks" },
          { label: "Pricing", href: "/pricing" },
          { label: "Odds", href: "/odds" },
        ]}
      />
      {children}
      <Footer
        description="Confidence-scored betting signals for every sport. Priced by conviction. Backed by the model. Not a sportsbook."
        copyright="© 2028 WAGERBIRD. All rights reserved."
        sections={[
          {
            title: "Products",
            links: [
              { label: "Terminal", href: "/terminal" },
              { label: "Hotsheet", href: "/hotsheet" },
              { label: "Sportsbooks", href: "/sportsbooks" },
              { label: "Learn", href: "/learn" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Affiliates", href: "/affiliates" },
              { label: "Results", href: "/results" },
              { label: "Live Odds", href: "/live-odds" },
              { label: "FAQ", href: "/faq" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ],
          },
        ]}
      />
    </>
  );
}
