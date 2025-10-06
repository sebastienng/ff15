import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/vite";
import wyw from "@wyw-in-js/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wyw(),
    linaria({
      include: [
        "src/**/*.tsx",
        "src/**/*.ts",
        "**/*.style.ts",
        "**/*.style.tsx",
      ], // adjust to your paths
    }),
  ],
});
