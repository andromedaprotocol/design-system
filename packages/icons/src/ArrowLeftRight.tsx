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

export const ArrowLeftRight = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='17 11 21 7 17 3'/>
          <line  x1='21' y1='7' x2='9' y2='7'/>
          <polyline  points='7 21 3 17 7 13'/>
          <line  x1='15' y1='17' x2='3' y2='17'/>
        </svg>
    );
  }
);