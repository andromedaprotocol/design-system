import { cssVar } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";
import {useTableClass} from './styles';

export interface TableProps extends  React.HTMLAttributes<HTMLTableElement>{
  variant ?: "simple" | "striped" | "unstyled";
  size?: "sm" | "md" | "lg";
  children?:React.ReactNode;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    size = "md",
    className,
    "aria-label": ariaLabel,
    children,
    variant = "striped",
    ...rest
  } = props;
  const classes = useTableClass({variant})
  return (
    // <div className={`border-gray-200 ${size === 'sm' ? 'max-w-screen-sm' : size === 'lg' ? 'w-full' : 'max-w-screen-md'} rounded-[12px] border-[1px] p-3`}>
      <table
        ref={ref}
        aria-label={ariaLabel}
        className={cx('w-full border-[1px] border-gray-200 drop-shadow-sm text-gray-500 font-inter',classes, className)}
        {...rest}
      >
        {children}
      </table>
    // </div>
  )
});

if (__DEV__) {
  Table.displayName = "Table";
}

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  placement?: "top" | "bottom"
}

export const TableCaption = React.forwardRef<HTMLTableElement, TableCaptionProps>(
  (props, ref) => {
    const {
      placement = "bottom",
      className,
      ...rest
    } = props
    return (
      <caption
        {...rest}
        ref={ref}
        className = {cx('px-6 py-2 border-[1px] border-gray-200', className)}
        style={{captionSide : placement }}
      />
    )
  },
)

if (__DEV__) {
  TableCaption.displayName = "TableCaption"
}

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableHeaderCellElement>{
  children?: React.ReactNode;
}

export const Thead = React.forwardRef<HTMLTableElement, TableHeadProps>(
  (props, ref) => {
    const {
      className,
      children,
      ...rest
    } = props
  return (
    <thead className={cx('text-xs font-medium children:first-of-type:children:bg-white', className)}>{children}</thead>
  )
})


export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const Tbody = React.forwardRef<HTMLTableElement,TableBodyProps>(
  (props, ref) => {
    const {
      className,
      children,
      ...rest
    } = props
  return (
    <tbody className={cx('text-sm font-normal', className)}>{children}</tbody>
  )
})


export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const Tfoot = React.forwardRef<HTMLTableElement,TableFooterProps>(
  (props, ref) => {
    const {
      className,
      children,
      ...rest
    } = props
  return (
    <tfoot className={cx('text-xs font-medium', className)}>{children}</tfoot>
  )
})

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export const Tr = React.forwardRef<HTMLTableElement,TableRowProps>(
  (props, ref) => {
    const {
      className,
      children,
      ...rest
    } = props

  return (
    <tr className={cx('px-6 py-3', className)}>{children}</tr>
  )
})

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  isNumeric?: boolean;
}

export const Td = React.forwardRef<HTMLTableElement,TableCellProps>(
  (props, ref) => {
    const {
      className,
      children,
      isNumeric,
      ...rest
    } = props
  return (
    <td className={cx('px-6 py-3 ' + (isNumeric && isNumeric ? 'text-right' : 'text-left'), className)}>{children}</td>
  )
})

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  children?: React.ReactNode;
  isNumeric?: boolean;
}

export const Th = React.forwardRef<HTMLTableElement,TableHeaderProps>(
  (props, ref) => {
    const {
      className,
      children,
      isNumeric,
      ...rest
    } = props
  return (
    <th className={cx('px-6 py-3 ' + ( isNumeric && isNumeric ? 'text-right' : 'text-left'), className)}>{children}</th>
  )
})