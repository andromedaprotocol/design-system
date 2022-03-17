import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "card.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Card>
    <p>Card</p>
  </Card>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const cardComponent = {
  name: "Card",
  importer: `import { Card } from "@andromedaprotocol/react"`,
  demoList,
};

export default function Card() {
  return (
    <>
      <SEO title="Tailwind CSS Card" />
      <DocumentBuilder component={cardComponent} />
    </>
  );
}
