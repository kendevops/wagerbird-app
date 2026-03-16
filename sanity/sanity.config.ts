import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./schemas";
import { locations, mainDocuments } from "./lib/presentation/resolve";
import { DeleteQuantumSubmissionAction } from "./actions/deleteQuantumSubmission";

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
            S.listItem()
              .title("Affiliates Page")
              .child(
                S.document()
                  .schemaType("affiliatesPage")
                  .documentId("affiliatesPage")
              ),
            S.listItem()
              .title("Quantum Page")
              .child(
                S.document()
                  .schemaType("quantumPage")
                  .documentId("quantumPage")
              ),
            S.listItem()
              .title("Quantum Submissions")
              .child(
                S.documentTypeList("quantumSubmission")
                  .title("Quantum Submissions")
                  .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
              ),
            S.listItem()
              .title("Blog Posts")
              .child(
                S.documentTypeList("blogPost")
                  .title("Blog Posts")
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
            S.listItem()
              .title("Sign In Page")
              .child(
                S.document()
                  .schemaType("signInPage")
                  .documentId("signInPage")
              ),
            S.listItem()
              .title("Register Page")
              .child(
                S.document()
                  .schemaType("registerPage")
                  .documentId("registerPage")
              ),
            ...S.documentTypeListItems().filter(
              (item) =>
                item.getId() !== "page" &&
                item.getId() !== "siteSettings" &&
                item.getId() !== "affiliatesPage" &&
                item.getId() !== "quantumPage" &&
                item.getId() !== "quantumSubmission" &&
                item.getId() !== "blogPost" &&
                item.getId() !== "signInPage" &&
                item.getId() !== "registerPage"
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
  document: {
    actions: (prev, { schemaType }) =>
      schemaType === "quantumSubmission"
        ? [DeleteQuantumSubmissionAction, ...prev]
        : prev,
  },
});
