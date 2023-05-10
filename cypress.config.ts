import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'zyqhw1',
  e2e: {
    baseUrl: "http://localhost:3000",
    screenshotOnRunFailure: false,
    video: false,
    videoUploadOnPasses: false
  },
});
