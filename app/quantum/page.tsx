import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { quantumPageQuery, type QuantumPageResult } from "@/sanity/lib/queries";
import QuantumPageContent from "@/components/QuantumPageContent";

export const metadata: Metadata = {
  title: "Quantum — WagerBird | Private Client Program",
  description:
    "Quantum is WagerBird's private advisory program — a dedicated relationship between you, your personal trader, and institutional-grade intelligence.",
};

export default async function QuantumPage() {
  let data: QuantumPageResult = null;
  if (hasValidSanityConfig()) {
    const { isEnabled } = await draftMode();
    const client = getClient(isEnabled);
    data = await client.fetch<QuantumPageResult>(quantumPageQuery);
  }
  return <QuantumPageContent data={data} />;
}
