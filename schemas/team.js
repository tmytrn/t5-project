export default {
  name: "teamPage",
  type: "document",
  title: "Team",
  fields: [
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
    },
    {
      name: "aboutText",
      type: "array",
      title: "About Text",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "credits",
      type: "array",
      title: "Credits",
      of: [{ type: "credit" }],
    },
  ],
  // orderings: [
  //   {
  //     title: "Oldest-Newest",
  //     name: "periodAsc",
  //     by: [{ field: "period", direction: "asc" }],
  //   },
  // ],
};
