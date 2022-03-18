import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

interface IDataTableProps {
  /** Controls DataTable appearance */
  columnContentType:( "text" | "numeric")[]
  headings: React.ReactNode[];
  rows: ((string | number | React.ReactNode)[])[];
  /* React Node */
  // children?: React.ReactNode;
}

export interface DataTableProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IDataTableProps {
  /**
   * A11y: A label that describes the DataTable
   */
  "aria-label"?: string;
}

const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>((props, ref) => {
  const {
    columnContentType,
    headings,
    rows,
    className,
    "aria-label": ariaLabel,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      aria-label={ariaLabel}
      className={cx('border-[1px] min-w-{500px} overflow-x-auto rounded-lg shadow-md border-grey-200 m-0', className)}
      {...rest}
    >
      <table className="w-full">
        {
          headings.map((head, i) => {
            return <th className={`p-4 border-b border-grey-200 ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'}`}>{head}</th>
          })
        }
        <tbody>
          {
            rows.map((row, key) => {
              return (
                <tr key={key}>
                  {
                    row.map((cell, i) => {
                      return <td className={`p-4 border-b border-grey-200 ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'}`}>{cell}</td>
                    })
                  }
                </tr>
              )
            })
          } 
        </tbody>
      </table> 
    </div>
  );
});

if (__DEV__) {
  DataTable.displayName = "DataTable";
}

export { DataTable };
