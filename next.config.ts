import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
    ];
  },
});

export default nextConfig;
