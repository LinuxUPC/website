import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://linuxupc.org",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file"
  }
});
