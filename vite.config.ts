import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // React + router change far less often than catalog data, so they get their own
        // long-lived chunk instead of being invalidated by every product sync.
        // SSR keeps them external, so the split only applies to the client build.
        manualChunks: isSsrBuild
          ? undefined
          : { vendor: ["react", "react-dom", "react-router-dom"] },
      },
    },
  },
}));
