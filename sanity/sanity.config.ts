import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./schemas";
import { locations, mainDocuments } from "./lib/presentation/resolve";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "wagerbird",
  title: "WAGERBIRD CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site SEO & Icons")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("Pages")
              .child(
                S.documentTypeList("page")
                  .title("Pages")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "page" && item.getId() !== "siteSettings"
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
    presentationTool({
      resolve: { locations, mainDocuments },
      previewUrl: {
        initial: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      allowOrigins: ["http://localhost:*", "http://127.0.0.1:*"],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
