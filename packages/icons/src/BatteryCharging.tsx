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

export const BatteryCharging = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-3'/>
          <path  d='M7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h2'/>
          <polyline  points='11 7 8 12 12 12 9 17'/>
          <line  x1='22' x2='22' y1='11' y2='13'/>
        </svg>
    );
  }
);