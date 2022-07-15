import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile(), svgr()],
  build: {
    rollupOptions: {
      output: {
        paths: {
          "./dist/": "everything.js",
        }
      },
    },
  },
});