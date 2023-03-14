// Add Schema type to hidden
const hiddenDocTypes = (listItem) => !["siteconfig"].includes(listItem.getId());

// Render a custom UI to view siteconfig & pages
// and showing other items except mentioed in the hiddendoctypes
export default (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Team Page")
        .id("teamPage")
        .child(S.document().schemaType("teamPage").documentId("teamPage")),
      S.documentTypeListItem("disc").title("Discs"),
      S.documentTypeListItem("period").title("Periods"),
      S.divider(),
    ]);
