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

export const Delete = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z'/>
          <line  x1='18' y1='9' x2='12' y2='15'/>
          <line  x1='12' y1='9' x2='18' y2='15'/>
        </svg>
    );
  }
);