import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    port: 8000,
    open: true,
  },
});
