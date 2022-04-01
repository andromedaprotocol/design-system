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

export const Cookie = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5'/>
          <path  d='M8.5 8.5v.01'/>
          <path  d='M16 15.5v.01'/>
          <path  d='M12 12v.01'/>
          <path  d='M11 17v.01'/>
          <path  d='M7 14v.01'/>
        </svg>
    );
  }
);