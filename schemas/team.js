export default {
  name: "teamPage",
  type: "document",
  title: "Team",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              description: "Important for SEO and accessibility.",
              title: "Alt text",
              validation: (Rule) =>
                Rule.custom((value, { parent }) =>
                  parent?.asset && !value ? "Alt text is required" : true
                ),
            },
          ],
        },
      ],
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
    {
      name: "additionalCredits",
      type: "array",
      title: "Additional Credits",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
