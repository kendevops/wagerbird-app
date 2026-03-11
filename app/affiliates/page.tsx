import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { affiliatesPageQuery, type AffiliatesPageResult } from "@/sanity/lib/queries";
import AffiliatesPageContent from "@/components/AffiliatesPageContent";

export const metadata: Metadata = {
  title: "Affiliates — WagerBird",
  description:
    "Earn 30% commission on every first-time purchase. No tiers. No forced subscriptions. Paying out from day one.",
};

export default async function AffiliatesPage() {
  let data: AffiliatesPageResult = null;

  if (hasValidSanityConfig()) {
    const { isEnabled } = await draftMode();
    const client = getClient(isEnabled);
    data = await client.fetch<AffiliatesPageResult>(affiliatesPageQuery);
  }

  return <AffiliatesPageContent data={data} />;
}
