// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "258g4cwf", // replace value with your own
    dataset: "production", // replace value with your own
  },
  project: {
    basePath: "/studio",
  },
});
