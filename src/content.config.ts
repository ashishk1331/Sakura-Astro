import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/pages/posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      slug: z.string(),
      pubDate: z.date(),
      draft: z.boolean().optional(),
      description: z.string(),
      author: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};
