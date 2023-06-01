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
      name: "link",
      type: "url",
      title: "Link",
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
};
