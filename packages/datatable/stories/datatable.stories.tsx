import { DataTable } from "../src";
import { useState } from "react";
import { useCallback } from "react";
import { Card } from "@andromedaprotocol/card";
import { Link } from "@andromedaprotocol/link";

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
      totals={['', '', '', 255, '$155,830.00']}
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

export const sortableDataTable = () => {
  const [sortedRows, setSortedRows] = useState(null);

  const initiallySortedRows = [
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
  const rows = sortedRows ? sortedRows : initiallySortedRows;

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows],
  );

  return (
    <div className="flex flex-col space-y-2">
        <DataTable
          columnContentType={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={1}
          onSort={handleSort}
        />
    </div>
  );

  function sortCurrency(rows, index, direction) {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(rowA[index].substring(1));
      const amountB = parseFloat(rowB[index].substring(1));

      return direction === 'descending' ? amountB - amountA : amountA - amountB;
    });
  }
}

export const DataTableWithFooter = () => {
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

  return (
      <Card>
        <DataTable
          columnContentType={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
  )
}

export const DataTableWithCustomsHeading = () => (
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
      totals={['', '', '', '', '$155,830.00']}
      totalsName={{
        singular: 'Total net sales',
        plural: 'Total net sales',
      }}
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

export const DataTableWithTotalsInFooter = () => (
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
      totals={['', '', '', 255, '$155,830.00']}
      showTotalsInFooter
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

export const DataTableLinkExample = () => {
  const rows = [
    [
      <Link
        removeUnderline
        href="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$122,500.00',
    ],
    [
      <Link
        removeUnderline
        href="https://www.example.com"
        key="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        href="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
      <Card>
        <DataTable
          columnContentType={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={['Product', 'Price', 'SKU Number', 'Quantity', 'Net sales']}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
      </Card>
  );
}

export const FullDataTableExample = () => {
  const [sortedRows, setSortedRows] = useState(null);

  const initiallySortedRows = [
    [
      <Link
        removeUnderline
        href="https://www.example.com"
        key="emerald-silk-gown"
      >
        Emerald Silk Gown
      </Link>,
      '$875.00',
      124689,
      140,
      '$121,500.00',
    ],
    [
      <Link
        removeUnderline
        url="https://www.example.com"
        href="mauve-cashmere-scarf"
      >
        Mauve Cashmere Scarf
      </Link>,
      '$230.00',
      124533,
      83,
      '$19,090.00',
    ],
    [
      <Link
        removeUnderline
        href="https://www.example.com"
        key="navy-merino-wool"
      >
        Navy Merino Wool Blazer with khaki chinos and yellow belt
      </Link>,
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  const rows = sortedRows ? sortedRows : initiallySortedRows;
  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows],
  );

  return (
      <Card>
        <DataTable
          columnContentType={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
  );

  function sortCurrency(rows, index, direction) {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(rowA[index].substring(1));
      const amountB = parseFloat(rowB[index].substring(1));

      return direction === 'descending' ? amountB - amountA : amountA - amountB;
    });
  }
}