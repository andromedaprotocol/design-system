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

export const Building = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='2' width='16' height='20' rx='2' ry='2'/>
          <path  d='M9 22v-4h6v4'/>
          <path  d='M8 6h.01'/>
          <path  d='M16 6h.01'/>
          <path  d='M12 6h.01'/>
          <path  d='M12 10h.01'/>
          <path  d='M12 14h.01'/>
          <path  d='M16 10h.01'/>
          <path  d='M16 14h.01'/>
          <path  d='M8 10h.01'/>
          <path  d='M8 14h.01'/>
        </svg>
    );
  }
);