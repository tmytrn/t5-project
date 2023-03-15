import React from "react";
export default {
  name: "color",
  type: "document",
  title: "Colors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Color Name",
    },
    { name: "hex", type: "string", title: "Hex" },
  ],
  preview: {
    select: {
      title: "name",
      hex: "hex",
    },
    prepare({ title, hex }) {
      return {
        title: title,
        media: (
          <span
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: hex,
            }}></span>
        ),
      };
    },
  },
};
