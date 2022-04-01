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

export const Wind = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17.7 7.7a2.5 2.5 0 111.8 4.3H2'/>
          <path  d='M9.6 4.6A2 2 0 1111 8H2'/>
          <path  d='M12.6 19.4A2 2 0 1014 16H2'/>
        </svg>
    );
  }
);