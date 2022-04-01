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

export const Coffee = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18 8h1a4 4 0 010 8h-1'/>
          <path  d='M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z'/>
          <line  x1='6' y1='1' x2='6' y2='4'/>
          <line  x1='10' y1='1' x2='10' y2='4'/>
          <line  x1='14' y1='1' x2='14' y2='4'/>
        </svg>
    );
  }
);