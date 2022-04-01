import { Table, Thead, Tbody, Tfoot, Td, Th, Tr } from "../src";
import { Checkbox } from "@andromedaprotocol/react";
import { Icon } from "@andromedaprotocol/react";

export default {
  title: "Table",
  component: Table,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export const basic = () => (
  <Table variant="striped">
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
                className="text-blue-500 w-6 h-6"
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
                className="text-blue-500 w-6 h-6"
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
                className="text-blue-500 w-6 h-6"
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
                className="text-blue-500 w-6 h-6"
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
);
