import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const displayTextPropTypes = [
  {
    property: "size",
    type: ["xs", "sm", "md", "lg", "xl", "2xl"],
    default: "md",
    values: ["xs", "sm", "md", "lg", "xl", "2xl"],
    description: "Controls display-text size",
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
    name: "DisplayText",
    value: "display-text",
    propTypes: displayTextPropTypes,
  },
];

const demoList = [
  {
    name: "Size",
    files: [
      {
        name: "display-text.tsx",
        code: `<div className="flex flex-col content-between space-y-4 m-4">
	<DisplayText size="2xl" as="h1">
		Heading 2xl
	</DisplayText>
	<DisplayText size="xl" as="h2">
		Heading xl
	</DisplayText>
	<DisplayText size="lg" as="h3">
		Heading lg
	</DisplayText>
	<DisplayText size="md">Heading md</DisplayText>
	<DisplayText size="sm">Heading sm</DisplayText>
	<DisplayText size="xs">Heading xs</DisplayText>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const component = {
  name: "DisplayText",
  importer: `import { DisplayText } from "@andromedaprotocol/react"`,
  demoList,
  propList,
};

export default function DisplayText() {
  return (
    <>
      <SEO title="Tailwind CSS DisplayText" />
      <DocumentBuilder component={component} />
    </>
  );
}
