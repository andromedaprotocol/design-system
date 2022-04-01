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

export const Coins = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='8' cy='8' r='7'/>
          <path  d='M19.5 9.94a7 7 0 11-9.56 9.56'/>
          <path  d='M7 6h1v4'/>
          <path  d='M17.3 14.3l.7.7-2.8 2.8'/>
        </svg>
    );
  }
);