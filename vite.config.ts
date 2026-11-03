import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "client", "src") },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: isSsrBuild
    ? {
        // Build-time renderer for scripts/prerender.mjs; never deployed.
        outDir: path.resolve(import.meta.dirname, "dist/ssr"),
        emptyOutDir: true,
        ssr: path.resolve(import.meta.dirname, "client/src/entry-server.tsx"),
      }
    : {
        outDir: path.resolve(import.meta.dirname, "dist/public"),
        emptyOutDir: true,
      },
  ssr: { noExternal: true },
  server: { port: 3000, strictPort: false, host: true },
}));
