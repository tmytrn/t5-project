import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";

export default defineConfig({
  basePath: "/admin",
  title: "t5-project",
  projectId: "258g4cwf",
  dataset: "production",
  plugins: [
    deskTool({
      structure: (S) => {
        return S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .child(
                S.document().schemaType("aboutPage").documentId("aboutPage")
              ),
            S.listItem()
              .title("Team Page")
              .id("teamPage")
              .child(
                S.document().schemaType("teamPage").documentId("teamPage")
              ),
            S.documentTypeListItem("disc").title("Discs"),
            S.documentTypeListItem("period").title("Periods"),
            S.divider(),
          ]);
      },
    }),
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
