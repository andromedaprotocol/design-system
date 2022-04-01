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

export const ListChecks = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='10' y1='6' x2='21' y2='6'/>
          <line  x1='10' y1='12' x2='21' y2='12'/>
          <line  x1='10' y1='18' x2='21' y2='18'/>
          <polyline  points='3 6 4 7 6 5'/>
          <polyline  points='3 12 4 13 6 11'/>
          <polyline  points='3 18 4 19 6 17'/>
        </svg>
    );
  }
);