import * as React from "react";

import {
  DataTable as InternalDataTable, DataTableProps
} from "./datatable";

interface DataTable
  extends React.ForwardRefExoticComponent<
  DataTableProps & React.RefAttributes<HTMLElement>
  > {
}

const DataTable = InternalDataTable as DataTable;

export type {
  DataTableProps,
};

export {
  DataTable
};
