// vite.config.js
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: {
        reactForm: "./lib/reactComponents/index.ts",
        vueForm: "./lib/vueComponents/index.ts",
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "vue"],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
