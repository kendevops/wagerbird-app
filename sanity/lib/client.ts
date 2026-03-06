import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";
const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL;
const token = process.env.SANITY_API_VIEWER_TOKEN;

/** True when Sanity env is set and not the build-time placeholder (avoids API calls during prerender when env is missing). */
export const hasValidSanityConfig = (): boolean =>
  typeof process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "string" &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.length > 0 &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token ?? undefined,
  stega: studioUrl
    ? {
        enabled: true,
        studioUrl,
      }
    : undefined,
});

export function getClient(preview = false) {
  return preview ? previewClient : client;
}
