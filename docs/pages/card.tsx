import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const cardPropTypes = [
  {
    property: "variant",
    type: ["elevation", "outlined"],
    default: "elevation",
    values: ["elevation", "outlined"],
    description: "Controls card appearance",
  },
];

const propList = [
  {
    name: "Card",
    value: "card",
    propTypes: cardPropTypes,
  },
];

const demoList = [
  {
    name: "Variants",
    files: [
      {
        name: "card.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Card>
    <p>Card Default</p>
  </Card>
  <Card variant="outlined">
    <p>Card Outlined</p>
  </Card>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const component = {
  name: "Card",
  importer: `import { Card } from "@andromedaprotocol/react"`,
  demoList,
  propList,
};

export default function Card() {
  return (
    <>
      <SEO title="Tailwind CSS Card" />
      <DocumentBuilder component={component} />
    </>
  );
}
