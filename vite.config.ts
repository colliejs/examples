import collie from "@colliejs/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { collieConfig } from "./collie.config";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    collie({
      entry: "src/main.tsx",
      styledConfig: collieConfig,
    }),
    react(),
    Inspect(),
  ],
});
