import { DataTable } from "../src";

export default {
  title: "DataTable",
  component: DataTable,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
const rows = [
  ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
  ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
  [
    'Navy Merino Wool Blazer with khaki chinos and yellow belt',
    '$445.00',
    124518,
    32,
    '$14,240.00',
  ],
];
export const basic = () => (
  <div className="flex flex-col space-y-2">
    <DataTable
      headings={[
        'Product',
        'Price',
        'SKU Number',
        'Net quantity',
        'Net sales',
      ]}
      rows={rows}
      columnContentType={[
        'text',
        'numeric',
        'numeric',
        'numeric',
        'numeric',
      ]}
    />
  </div>
);
