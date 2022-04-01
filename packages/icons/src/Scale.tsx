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

export const Scale = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 16l3-8 3.001 8A5.002 5.002 0 0116 16z'/>
          <path  d='M2 16l3-8 3.001 8A5.002 5.002 0 012 16z'/>
          <path  d='M7 21h10'/>
          <path  d='M12 3v18'/>
          <path  d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'/>
        </svg>
    );
  }
);