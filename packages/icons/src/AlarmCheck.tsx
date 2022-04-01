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

export const AlarmCheck = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 21a8 8 0 100-16 8 8 0 000 16z'/>
          <path  d='M5 3L2 6'/>
          <path  d='M22 6l-3-3'/>
          <path  d='M6 19l-2 2'/>
          <path  d='M18 19l2 2'/>
          <path  d='M9 13l2 2 4-4'/>
        </svg>
    );
  }
);