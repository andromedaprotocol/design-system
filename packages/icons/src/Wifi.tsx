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

export const Wifi = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M5 13a10 10 0 0114 0'/>
          <path  d='M8.5 16.5a5 5 0 017 0'/>
          <path  d='M2 8.82a15 15 0 0120 0'/>
          <line  x1='12' y1='20' x2='12.01' y2='20'/>
        </svg>
    );
  }
);