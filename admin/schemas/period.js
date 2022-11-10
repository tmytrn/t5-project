export default {
  name: "period",
  type: "document",
  title: "Periods",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
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
  ],
  // orderings: [
  //   {
  //     title: "Oldest-Newest",
  //     name: "periodAsc",
  //     by: [{ field: "period", direction: "asc" }],
  //   },
  // ],
};
