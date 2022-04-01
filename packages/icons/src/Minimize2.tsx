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

export const Minimize2 = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='4 14 10 14 10 20'/>
          <polyline  points='20 10 14 10 14 4'/>
          <line  x1='14' y1='10' x2='21' y2='3'/>
          <line  x1='3' y1='21' x2='10' y2='14'/>
        </svg>
    );
  }
);