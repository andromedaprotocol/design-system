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

export const Shuffle = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='16 3 21 3 21 8'/>
          <line  x1='4' y1='20' x2='21' y2='3'/>
          <polyline  points='21 16 21 21 16 21'/>
          <line  x1='15' y1='15' x2='21' y2='21'/>
          <line  x1='4' y1='4' x2='9' y2='9'/>
        </svg>
    );
  }
);