import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "card.tsx",
        code: `<div className="flex flex-col space-y-2">
  <Card className="w-auto p-5 border-[1px] shadow-md rounded-lg border-grey-200">
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
