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

export const Repeat = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 2l4 4-4 4'/>
          <path  d='M3 11v-1a4 4 0 014-4h14'/>
          <path  d='M7 22l-4-4 4-4'/>
          <path  d='M21 13v1a4 4 0 01-4 4H3'/>
        </svg>
    );
  }
);