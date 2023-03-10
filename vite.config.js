import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const resolveFixup = {
  name: "resolve-fixup",
  setup(build) {
    build.onResolve({ filter: /react-virtualized/ }, async (args) => {
      return {
        path: path.resolve(
          "./node_modules/react-virtualized/dist/umd/react-virtualized.js"
        ),
      };
    });
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000 * 1024, // Set the limit to 1 MB
  },
  base: '/Hackathon-Project/',
  optimizeDeps: {
    esbuildOptions: {
      plugins: [resolveFixup],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});