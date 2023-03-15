import { createClient, createImageUrlBuilder } from "next-sanity";
import { PortableText as PortableTextComponent } from "@portabletext/react";

import { config } from "./config";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

// Set up Portable Text serialization
export const PortableText = (props) => (
  <PortableTextComponent
    components={{
      types: {
        code: (props) => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
    }}
    {...props}
  />
);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
