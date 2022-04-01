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

export const Network = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='9' y='2' width='6' height='6'/>
          <rect  x='16' y='16' width='6' height='6'/>
          <rect  x='2' y='16' width='6' height='6'/>
          <path  d='M12 8v4m0 0H5v4m7-4h7v4'/>
        </svg>
    );
  }
);