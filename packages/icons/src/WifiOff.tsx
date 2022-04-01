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

export const WifiOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='2' y1='2' x2='22' y2='22'/>
          <path  d='M8.5 16.5a5 5 0 017 0'/>
          <path  d='M2 8.82a15 15 0 014.17-2.65'/>
          <path  d='M10.66 5c4.01-.36 8.14.9 11.34 3.76'/>
          <path  d='M16.85 11.25a10 10 0 012.22 1.68'/>
          <path  d='M5 13a10 10 0 015.24-2.76'/>
          <line  x1='12' y1='20' x2='12.01' y2='20'/>
        </svg>
    );
  }
);