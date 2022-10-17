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
    prepare(selection) {
      const { title, hex } = selection;
      return {
        title: title,
        media: (
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: hex,
            }}
          />
        ),
      };
    },
  },
;
