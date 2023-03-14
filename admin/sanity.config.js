import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  title: "t5-project",
  projectId: "258g4cwf",
  dataset: "production",
  plugins: [
    deskTool({ structure: deskStructure }),
    visionTool({
      // Note: These are both optional
      defaultApiVersion: "v2021-10-21",
      defaultDataset: "production",
    }),
  ],
  schema: {
    types: schemas,
  },
});
