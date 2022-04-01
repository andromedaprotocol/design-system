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

export const Bug = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  width='8' height='14' x='8' y='6' rx='4'/>
          <path  d='M19 7l-3 2'/>
          <path  d='M5 7l3 2'/>
          <path  d='M19 19l-3-2'/>
          <path  d='M5 19l3-2'/>
          <path  d='M20 13h-4'/>
          <path  d='M4 13h4'/>
          <path  d='M10 4l1 2'/>
          <path  d='M14 4l-1 2'/>
        </svg>
    );
  }
);