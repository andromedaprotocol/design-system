import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic Table",
    files: [
      {
        name: "table.tsx",
        code: `<div className="flex flex-col space-y-2">
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</div>
      `,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const component = {
  name: "Table",
  importer: `import { Table } from "@andromedaprotocol/react"`,
  demoList,
};

export default function Table() {
  return (
    <>
      <SEO title="Tailwind CSS Table" />
      <DocumentBuilder component={component} />
    </>
  );
}
