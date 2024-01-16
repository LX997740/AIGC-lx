import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
function resolve(url) {
  return path.join(__dirname, url);
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  plugins: [vue()],
});
