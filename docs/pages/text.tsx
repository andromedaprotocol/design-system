import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const TextPropTypes = [
  {
    property: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    default: "md",
    values: ["xs", "sm", "md", "lg", "xl"],
    description: "Controls text size",
  },
  {
    property: "as",
    type: ["React.ElementType"],
    default: "p",
    values: [],
    description: "The element or component to use",
  },
];

const propList = [
  {
    name: "Text",
    value: "text",
    propTypes: TextPropTypes,
  },
];

const demoList = [
  {
    name: "Size",
    files: [
      {
        name: "text.tsx",
        code: `<div className="flex flex-col content-between space-y-4 m-4">
  <Text size="xl">Text xl</Text>
  <Text size="lg">Text lg</Text>
  <Text size="md">Text md</Text>
  <Text size="sm">Text sm</Text>
  <Text size="xs">Text xs</Text>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const component = {
  name: "Text",
  importer: `import { Text } from "@andromedaprotocol/react"`,
  demoList,
  propList,
};

export default function Text() {
  return (
    <>
      <SEO title="Tailwind CSS Text" />
      <DocumentBuilder component={component} />
    </>
  );
}
