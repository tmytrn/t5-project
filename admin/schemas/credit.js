export default {
  name: "credit",
  type: "document",
  title: "Credits",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },
    {
      name: "bio",
      type: "array",
      title: "Bio",
      of: [
        {
          type: "block",
        },
      ],
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
