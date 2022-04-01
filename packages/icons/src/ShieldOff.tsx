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

export const ShieldOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18'/>
          <path  d='M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38'/>
          <line  x1='1' y1='1' x2='23' y2='23'/>
        </svg>
    );
  }
);