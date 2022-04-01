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

export const Maximize2 = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='15 3 21 3 21 9'/>
          <polyline  points='9 21 3 21 3 15'/>
          <line  x1='21' y1='3' x2='14' y2='10'/>
          <line  x1='3' y1='21' x2='10' y2='14'/>
        </svg>
    );
  }
);