import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";
import { IconButton } from "@andromedaprotocol/react"
import { Icon } from "@andromedaprotocol/react"
import {
  ArrowSmUpIcon,
  ArrowSmDownIcon
} from "@heroicons/react/outline";

interface IDataTableProps {
  /** Controls DataTable appearance */
  columnContentType:( "text" | "numeric")[]
  headings: React.ReactNode[];
  rows: ((string | number | React.ReactNode)[])[];
  totals?: (string | number | React.ReactNode)[];
  sortable?: boolean[];
  initialSortColumnIndex?: number | undefined;
  defaultSortDirection?: "ascending" | "descending" | "none";
  footerContent?: string | number | React.ReactNode;
  totalsName?: {plural: string, singular: string};
  showTotalsInFooter?:boolean ;
  onSort?: (headingindex : number, direction:"ascending" | "descending" | "none" ) => void;
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
    sortable,
    totals,
    totalsName,
    initialSortColumnIndex = 0,
    defaultSortDirection = "ascending",
    footerContent,
    showTotalsInFooter,
    onSort,
    className,
    "aria-label": ariaLabel,
    ...rest
  } = props;

  const [direction, setDirecton] = React.useState(defaultSortDirection);
  const [sortIndex, setSortIndex] = React.useState(initialSortColumnIndex);
  const [customTotalName, setCustomTotalName] = React.useState<string>('');
  React.useEffect(() => {
    onSort && onSort(initialSortColumnIndex,defaultSortDirection )
    getTotalName()
  },[])

  const tableSort = (index : number) => {
    if(sortable && sortable[index] !== true) return ;
    setSortIndex(index)
    setDirecton(direction === 'ascending' ? 'descending' : 'ascending');
    onSort && onSort(index, direction )
  }

  const getTotalName = () => {
    
    let flg = 0;
    totals && totals.map((row, i) => {
      if(row){
        flg ++;
      }
    })
    if(flg > 1 && totalsName?.plural)
    {
      setCustomTotalName(totalsName?.plural)  
    }
    if(flg === 1 && totalsName?.singular)
    {
      setCustomTotalName(totalsName?.singular)  
    }
  }

  return (
    <div
      ref={ref}
      aria-label={ariaLabel}
      className={cx('border-[1px] min-w-{500px} overflow-x-auto rounded-lg shadow-md border-grey-200 m-0', className)}
      {...rest}
    >
      <table className="w-full">
        <thead>
        {
          headings.map((head, i) => {
            return <th className={`p-4 border-b border-grey-200 ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'} ${ sortable && sortable[i] === true ? 'cursor-pointer' : ''}` } onClick={() => tableSort(i)}>
              {
                i === sortIndex  && sortable && sortable[i] === true ? 
                    direction === 'ascending' ? 
                    <IconButton variant="ghost">
                      <Icon as={ArrowSmDownIcon} label="ArrowDown" className="w-4 h-4" />
                    </IconButton>    
                  : direction === 'none' ? '' : 
                    <IconButton variant="ghost">
                      <Icon as={ArrowSmUpIcon} label="ArrowUp" className="w-4 h-4" />
                    </IconButton>
                : ''
              }
                {head}
            </th>
          })
        }
        </thead>
        <tbody>
          {
            !showTotalsInFooter && !totalsName && totals &&(
            <tr>
            {
                totals && totals.map((row, i) => {
                    {
                      return <td className={`p-4 border-b border-grey-200 ${i === 0 ? 'font-bold' : ''} ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'}`}>
                                {i === 0 ? 'Totals' : row}
                              </td>
                    }
              })
            } 
            </tr>
           )}
          {
            rows.map((row, key) => {
              return (
                <tr key={key}>
                  {
                    row.map((cell, i) => {
                      return <td className={`p-4 border-b border-grey-200 ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'}`}>
                                {cell}
                              </td>
                    })
                  }
                </tr>
              )
            })
          }
          {
            totalsName &&(
            <tr>
            {
                totals && totals.map((row, i) => {
                    {
                      return <td className={`p-4 border-b border-grey-200 ${i === 0 ? 'font-bold' : ''} ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'}`}>
                                {i === 0 ? customTotalName : row}
                              </td>
                    }
              })
            } 
            </tr>
           )}
        </tbody>
        <tfoot>
        {
          showTotalsInFooter && totals &&(
          <tr>
          {
              totals && totals.map((row, i) => {
                  {
                    return <td className={`p-4 border-b border-grey-200 font-bold ${columnContentType[i] === 'text' ? 'text-left' : 'text-right'}`}>
                              {i === 0 ? 'Totals' : row}
                            </td>
                  }
            })
          } 
          </tr>
          )}
        </tfoot>
      </table> 
      { footerContent && (
        <div className="p-4 flex flex-row justify-center align-middle text-blackAlpha-500">
          {footerContent}
        </div>
      )}
    </div>
  );
});

if (__DEV__) {
  DataTable.displayName = "DataTable";
}

export { DataTable };
