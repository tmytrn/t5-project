export default {
  name: "disc",
  type: "document",
  title: "Discs",
  fields: [
    {
      name: "country",
      type: "string",
      title: "Country",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contributor",
      type: "string",
      title: "Contributor",
    },
    {
      name: "organization",
      type: "string",
      title: "Organization",
    },
    {
      name: "period",
      type: "reference",
      to: [{ type: "period" }],
      title: "Period",
    },
    {
      name: "size",
      type: "number",
      title: "Size",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "color",
      type: "reference",
      to: [{ type: "color" }],
      title: "Color",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quote",
      type: "string",
      title: "Quote",
    },
    {
      name: "translation",
      type: "string",
      title: "Translation",
    },
    {
      name: "context",
      type: "string",
      title: "Context",
    },
    {
      name: "credits",
      type: "string",
      title: "Credits",
    },
  ],
  orderings: [
    {
      title: "Country, A-Z",
      name: "countryasc",
      by: [{ field: "country", direction: "asc" }],
    },
  ],
};
