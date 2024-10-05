import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        interactivemap: resolve(__dirname, "./interactivemap/index.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
