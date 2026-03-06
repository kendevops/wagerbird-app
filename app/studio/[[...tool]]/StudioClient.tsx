"use client";

import dynamic from "next/dynamic";

const NextStudio = dynamic(
  () =>
    Promise.all([
      import("next-sanity/studio"),
      import("../../../sanity/sanity.config"),
    ]).then(([studio, configMod]) => {
      const Config = configMod.default;
      return function StudioWithConfig() {
        return <studio.NextStudio config={Config} />;
      };
    }),
  { ssr: false }
);

export default function StudioClient() {
  return <NextStudio />;
}
