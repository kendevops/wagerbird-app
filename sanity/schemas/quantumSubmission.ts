import { defineType, defineField } from "sanity";

export const quantumSubmissionType = defineType({
  name: "quantumSubmission",
  title: "Quantum Submission",
  type: "document",
  readOnly: true,
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "tierOfInterest",
      title: "Tier of Interest",
      type: "string",
      options: {
        list: [
          { title: "Ascent (Tier I)", value: "ascent" },
          { title: "Summit (Tier II)", value: "summit" },
          { title: "Apex (Tier III)", value: "apex" },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: "capitalCommitment",
      title: "Capital Commitment",
      type: "string",
      options: {
        list: [
          { title: "$50k - $250k", value: "50k-250k" },
          { title: "$250k - $1M", value: "250k-1m" },
          { title: "$1M+", value: "1m+" },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: "primaryMarkets",
      title: "Primary Markets of Interest",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      submittedAt: "submittedAt",
    },
    prepare({ firstName, lastName, email, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : "";
      return {
        title: [firstName, lastName].filter(Boolean).join(" ") || email || "Unknown",
        subtitle: email ? `${email} · ${date}` : date,
      };
    },
  },
});
