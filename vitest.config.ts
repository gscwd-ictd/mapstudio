import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "./e2e"],
    coverage: {
      reporter: ["text", "json-summary", "json", "html"],
      include: ["./src/lib/components/features"],
      reportOnFailure: true
    }
  },
});
