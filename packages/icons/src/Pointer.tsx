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

export const Pointer = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M22 14a8 8 0 01-8 8'/>
          <path  d='M18 11v-1a2 2 0 00-2-2v0a2 2 0 00-2 2v0'/>
          <path  d='M14 10V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1'/>
          <path  d='M10 9.5V4a2 2 0 00-2-2v0a2 2 0 00-2 2v10'/>
          <path  d='M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15'/>
        </svg>
    );
  }
);