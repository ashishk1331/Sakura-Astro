import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "http://eternal-zen.vercel.app",
  integrations: [tailwind()],
});
