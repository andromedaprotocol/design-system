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

export const RefreshCcw = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 2v6h6'/>
          <path  d='M21 12A9 9 0 006 5.3L3 8'/>
          <path  d='M21 22v-6h-6'/>
          <path  d='M3 12a9 9 0 0015 6.7l3-2.7'/>
        </svg>
    );
  }
);