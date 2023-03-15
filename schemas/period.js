export default {
  name: "period",
  type: "document",
  title: "Periods",
  fields: [
    {
      name: "period",
      type: "string",
      title: "Period",
    },
    {
      name: "past",
      type: "string",
      title: "Past Period",
    },
    {
      name: "future",
      type: "string",
      title: "Future Period",
    },
    {
      name: "about",
      type: "array",
      title: "About",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "activeImage",
      type: "image",
      title: "Active Image",
    },
    {
      name: "inactiveImage",
      type: "image",
      title: "Inactive Image",
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
