import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "http://eternal-zen.vercel.app",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
