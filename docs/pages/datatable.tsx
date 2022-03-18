import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic DataTable",
    files: [
      {
        name: "datatable.tsx",
        code: `<div className="flex flex-col space-y-2">
  <DataTable
    headings={[
      'Product',
      'Price',
      'SKU Number',
      'Net quantity',
      'Net sales',
    ]}
    rows={[
      ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
      ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
      [
        'Navy Merino Wool Blazer with khaki chinos and yellow belt',
        '$445.00',
        124518,
        32,
        '$14,240.00',
      ],
    ]}
    columnContentType={[
      'text',
      'numeric',
      'numeric',
      'numeric',
      'numeric',
    ]}
  />
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const component = {
  name: "DataTable",
  importer: `import { DataTable } from "@andromedaprotocol/react"`,
  demoList,
};

export default function DataTable() {
  return (
    <>
      <SEO title="Tailwind CSS DataTable" />
      <DocumentBuilder component={component} />
    </>
  );
}
