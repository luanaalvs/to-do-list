import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@form": resolve(__dirname, "src/components/form"),
      "@list": resolve(__dirname, "src/components/list"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
});
