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

export const FlashlightOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 16v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4'/>
          <path  d='M7 2h11v4c0 2-2 2-2 4v1'/>
          <line  x1='11' y1='6' x2='18' y2='6'/>
          <line  x1='2' y1='2' x2='22' y2='22'/>
        </svg>
    );
  }
);