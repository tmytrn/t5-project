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
      type: "array",
      title: "Quote",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "alignRight",
      type: "boolean",
      title: "Align Quote to Right",
    },
    {
      name: "translation",
      type: "string",
      title: "Translation",
    },
    {
      name: "spanishTranslation",
      type: "string",
      title: "Spanish Translation",
    },
    {
      name: "context",
      type: "array",
      title: "Context",
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
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      description: "Include 'https://' in the URL",
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
