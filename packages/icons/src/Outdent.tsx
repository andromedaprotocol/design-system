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

export const Outdent = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='7 8 3 12 7 16'/>
          <line  x1='21' y1='12' x2='11' y2='12'/>
          <line  x1='21' y1='6' x2='11' y2='6'/>
          <line  x1='21' y1='18' x2='11' y2='18'/>
        </svg>
    );
  }
);