import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import polyfillNode from "rollup-plugin-polyfill-node";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["buffer", "process"],
  },
  resolve: {
    alias: {
      // Polyfill Node.js globals and modules for browser:
      global: "rollup-plugin-polyfill-node/polyfills/global",
      process: "rollup-plugin-polyfill-node/polyfills/process-es6",
      buffer: "rollup-plugin-polyfill-node/polyfills/buffer-es6",
      util: "rollup-plugin-polyfill-node/polyfills/util",
      // Add other aliases if needed
    },
  },
  build: {
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },
  define: {
    "process.env": {}, // Fix process.env usage in some libs
  },
});
