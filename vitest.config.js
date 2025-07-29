import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
    globals: true,
    // Suppress the ReactDOMTestUtils.act deprecation warnings
    onConsoleLog(log, type) {
      if (type === "stderr" && log.includes("ReactDOMTestUtils.act")) {
        return false;
      }
    },
  },
});
