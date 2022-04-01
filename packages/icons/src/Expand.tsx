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

export const Expand = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 21l-6-6m6 6v-4.8m0 4.8h-4.8'/>
          <path  d='M3 16.2V21m0 0h4.8M3 21l6-6'/>
          <path  d='M21 7.8V3m0 0h-4.8M21 3l-6 6'/>
          <path  d='M3 7.8V3m0 0h4.8M3 3l6 6'/>
        </svg>
    );
  }
);