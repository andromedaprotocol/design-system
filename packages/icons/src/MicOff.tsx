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

export const MicOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='1' y1='1' x2='23' y2='23'/>
          <path  d='M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/>
          <path  d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23'/>
          <line  x1='12' y1='19' x2='12' y2='23'/>
          <line  x1='8' y1='23' x2='16' y2='23'/>
        </svg>
    );
  }
);