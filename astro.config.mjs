import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://china.kingcwt.top/",
  trailingSlash: "never",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-light",
      },
      remarkPlugins: [remarkMath, remarkReadingTime],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    tailwind(),
    react(),
  ],
  output: "static",
});
