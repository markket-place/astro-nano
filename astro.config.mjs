import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://markket.place",
  build: {
	assets: "noho",
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
