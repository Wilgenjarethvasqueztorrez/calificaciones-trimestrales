import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "/calificaciones-trimestrales/",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  plugins: []
});