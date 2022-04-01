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

export const WrapText = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='3' y1='6' x2='21' y2='6'/>
          <path  d='M3 12h15a3 3 0 110 6h-4'/>
          <polyline  points='16 16 14 18 16 20'/>
          <line  x1='3' y1='18' x2='10' y2='18'/>
        </svg>
    );
  }
);