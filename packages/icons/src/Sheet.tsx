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

export const Sheet = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <line  x1='3' y1='9' x2='21' y2='9'/>
          <line  x1='3' y1='15' x2='21' y2='15'/>
          <line  x1='9' y1='9' x2='9' y2='21'/>
          <line  x1='15' y1='9' x2='15' y2='21'/>
        </svg>
    );
  }
);