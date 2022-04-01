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

export const IndianRupee = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 3h12'/>
          <path  d='M6 8h12'/>
          <path  d='M6 13l8.5 8'/>
          <path  d='M6 13h3'/>
          <path  d='M9 13c6.667 0 6.667-10 0-10'/>
        </svg>
    );
  }
);