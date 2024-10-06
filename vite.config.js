import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        map: resolve(__dirname, "map.html"),
        whatispace: resolve(__dirname, "WhatIsPACE.html"),
      },
    },
  },
});
