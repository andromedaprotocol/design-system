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

export const AlarmClockOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19.94 14A8 8 0 0010 5.25m8.13 12.89A8 8 0 116.87 6.86'/>
          <path  d='M22 6l-3-3'/>
          <path  d='M6 19l-2 2'/>
          <path  d='M2 2l20 20'/>
          <path  d='M4 4L2 6'/>
        </svg>
    );
  }
);