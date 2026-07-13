// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "card-stack": resolve(__dirname, "card-stack/index.html"),
        "counter": resolve(__dirname, "counter/index.html"),
        "repeller": resolve(__dirname, "repeller/index.html"),
        "spotlight": resolve(__dirname, "spotlight/index.html"),
      },
    },
  },
});
