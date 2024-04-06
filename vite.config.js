// vite.config.js
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "lib/index.ts"),
        reactForm: resolve(__dirname, "lib/reactComponents/index.ts"),
        vueForm: resolve(__dirname, "lib/vueComponents/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "vue"],
      output: {
        // entryFileNames: "[name].[format].js",
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
