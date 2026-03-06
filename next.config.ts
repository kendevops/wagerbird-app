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
          { key: "Access-Control-Allow-Headers", value: "*" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Expose-Headers", value: "*" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
    ];
  },
});

export default nextConfig;
