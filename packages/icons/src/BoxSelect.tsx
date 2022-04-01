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

export const BoxSelect = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 2a2 2 0 00-2 2'/>
          <line  x1='8' y1='2' x2='10' y2='2'/>
          <line  x1='14' y1='2' x2='16' y2='2'/>
          <path  d='M4 22a2 2 0 01-2-2'/>
          <line  x1='22' y1='8' x2='22' y2='10'/>
          <line  x1='22' y1='14' x2='22' y2='16'/>
          <path  d='M22 20a2 2 0 01-2 2'/>
          <line  x1='14' y1='22' x2='16' y2='22'/>
          <line  x1='8' y1='22' x2='10' y2='22'/>
          <path  d='M20 2a2 2 0 012 2'/>
          <line  x1='2' y1='14' x2='2' y2='16'/>
          <line  x1='2' y1='8' x2='2' y2='10'/>
        </svg>
    );
  }
);