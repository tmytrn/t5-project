import { defineField } from "sanity";

export default {
  name: "aboutPage",
  type: "document",
  title: "About",
  fields: [
    {
      name: "heroText",
      type: "array",
      title: "Hero Paragraph",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
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
      name: "conceptImage",
      type: "image",
      title: "Concept Section Image",
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
    {
      name: "conceptText",
      type: "array",
      title: "Concept + Background Section",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "technicalImage",
      type: "image",
      title: "Technical Section Image",
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
    {
      name: "technicalText",
      type: "array",
      title: "Technical Section",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "furtherReadings",
      type: "array",
      title: "Further Readings",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "researchLinks",
      type: "array",
      title: "Research Links",
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
