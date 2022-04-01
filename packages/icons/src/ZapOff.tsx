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

export const ZapOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='12.41 6.75 13 2 10.57 4.92'/>
          <polyline  points='18.57 12.91 21 10 15.66 10'/>
          <polyline  points='8 8 3 14 12 14 11 22 16 16'/>
          <line  x1='1' y1='1' x2='23' y2='23'/>
        </svg>
    );
  }
);