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

export const Scan = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 7V5a2 2 0 012-2h2'/>
          <path  d='M17 3h2a2 2 0 012 2v2'/>
          <path  d='M21 17v2a2 2 0 01-2 2h-2'/>
          <path  d='M7 21H5a2 2 0 01-2-2v-2'/>
        </svg>
    );
  }
);