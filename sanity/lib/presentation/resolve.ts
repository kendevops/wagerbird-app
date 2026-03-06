import { defineDocuments, defineLocations } from "sanity/presentation";

export const locations = {
  page: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => {
      if (!doc) return null;
      return {
        locations: [
          {
            title: (doc.title ?? doc.slug ?? "Untitled") as string,
            href: doc.slug ? `/${doc.slug}` : "/",
          },
        ],
      };
    },
  }),
};

export const mainDocuments = defineDocuments([
  {
    route: "/",
    filter: '_type == "page" && slug.current == "home"',
  },
  {
    route: "/:slug",
    filter: '_type == "page" && slug.current == $slug',
  },
]);
