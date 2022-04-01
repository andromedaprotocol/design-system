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

export const Snowflake = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='2' y1='12' x2='22' y2='12'/>
          <line  x1='12' y1='2' x2='12' y2='22'/>
          <path  d='M20 16l-4-4 4-4'/>
          <path  d='M4 8l4 4-4 4'/>
          <path  d='M16 4l-4 4-4-4'/>
          <path  d='M8 20l4-4 4 4'/>
        </svg>
    );
  }
);