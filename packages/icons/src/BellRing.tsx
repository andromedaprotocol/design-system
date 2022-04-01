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

export const BellRing = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'/>
          <path  d='M13.73 21a2 2 0 01-3.46 0'/>
          <path  d='M2 8c0-2.2.7-4.3 2-6'/>
          <path  d='M22 8a10 10 0 00-2-6'/>
        </svg>
    );
  }
);