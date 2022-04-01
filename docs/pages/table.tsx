import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Table",
    value: "table",
    propTypes: [
      {
        property: "variant",
        type: ["simple", "striped", "unstyled"],
        default: "striped",
        values: ["simple", "striped", "unstyled"],
        description: "Variant of the tabl",
      },
      {
        property: "size",
        type: ["sm", "md", "lg"],
        default: "md",
        values: ["sm", "md", "lg"],
        description: "Size of the table",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic Table",
    files: [
      {
        name: "table.tsx",
        code: `<div className="flex flex-col space-y-2">
  <Table>
    <Thead>
      <Tr>
        <Th>
          <Checkbox className="mr-2" />
          File name
        </Th>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
          <div className="flex flex-row">
            <Checkbox />
            <div className="ml-2">
              <Icon
                name="info"
                label="info"
                className="text-blue-500 w-9 h-9"
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="font-bold text-black">Tech requirements.pdf</div>
              <div>200 KB</div>
            </div>
          </div>
        </Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>
          <div className="flex flex-row">
            <Checkbox />
            <div className="ml-2">
              <Icon
                name="info"
                label="info"
                className="text-blue-500 w-9 h-9"
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="font-bold text-black">Tech requirements.pdf</div>
              <div>200 KB</div>
            </div>
          </div>
        </Td>
        <Td>inches</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>
          <div className="flex flex-row">
            <Checkbox />
            <div className="ml-2">
              <Icon
                name="info"
                label="info"
                className="text-blue-500 w-9 h-9"
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="font-bold text-black">Tech requirements.pdf</div>
              <div>200 KB</div>
            </div>
          </div>
        </Td>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>
          <div className="flex flex-row">
            <Checkbox />
            <div className="ml-2">
              <Icon
                name="info"
                label="info"
                className="text-blue-500 w-9 h-9"
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="font-bold text-black">Tech requirements.pdf</div>
              <div>200 KB</div>
            </div>
          </div>
        </Td>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
  </Table>
</div>
      `,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const tableComponent = {
  name: "Table",
  importer: `import { Table, Thead, Tbody, Tr, Td, Th } from "@andromedaprotocol/react"`,
  demoList,
  propList,
};

export default function Table() {
  return (
    <>
      <SEO title="Tailwind CSS Table" />
      <DocumentBuilder component={tableComponent} />
    </>
  );
}
