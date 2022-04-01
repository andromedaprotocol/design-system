import React from "react";

import { DefaultProps } from "@andromedaprotocol/theme";

export interface IconProps extends DefaultProps {
  as?: React.ElementType;
  inline?: boolean;
  role?: string;
  color?: string;
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string;
  name: string;
}

export const QrCode = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='2' width='8' height='8'/>
          <path  d='M6 6h.01'/>
          <rect  x='14' y='2' width='8' height='8'/>
          <path  d='M18 6h.01'/>
          <rect  x='2' y='14' width='8' height='8'/>
          <path  d='M6 18h.01'/>
          <path  d='M14 14h.01'/>
          <path  d='M18 18h.01'/>
          <path  d='M18 22h4v-4'/>
          <path  d='M14 18v4'/>
          <path  d='M22 14h-4'/>
        </svg>
    );
  }
);