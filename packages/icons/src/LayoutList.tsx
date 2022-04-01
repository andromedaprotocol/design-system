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

export const LayoutList = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='14' width='7' height='7'/>
          <rect  x='3' y='3' width='7' height='7'/>
          <line  x1='14' y1='4' x2='21' y2='4'/>
          <line  x1='14' y1='9' x2='21' y2='9'/>
          <line  x1='14' y1='15' x2='21' y2='15'/>
          <line  x1='14' y1='20' x2='21' y2='20'/>
        </svg>
    );
  }
);