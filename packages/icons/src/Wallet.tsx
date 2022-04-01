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

export const Wallet = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4'/>
          <path  d='M4 6v12c0 1.1.9 2 2 2h14v-4'/>
          <path  d='M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z'/>
        </svg>
    );
  }
);