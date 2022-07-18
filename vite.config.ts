import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  }), viteSingleFile(), svgr(), tsconfigPaths()],
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