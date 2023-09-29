// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "258g4cwf",
    dataset: "production",
  },
  project: {
    basePath: "/admin",
  },
});
