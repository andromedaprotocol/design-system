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

export const Verified = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 3a3.6 3.6 0 00-3.05 1.68 3.6 3.6 0 00-.9-.1 3.6 3.6 0 00-2.42 1.06 3.6 3.6 0 00-.94 3.32A3.6 3.6 0 003 12a3.6 3.6 0 001.69 3.05 3.6 3.6 0 00.95 3.32 3.6 3.6 0 003.35.96A3.6 3.6 0 0012 21a3.6 3.6 0 003.04-1.67 3.6 3.6 0 004.3-4.3A3.6 3.6 0 0021 12a3.6 3.6 0 00-1.67-3.04v0a3.6 3.6 0 00-4.3-4.3A3.6 3.6 0 0012 3z'/>
          <path  d='M15 10l-4 4'/>
          <path  d='M9 12l2 2'/>
        </svg>
    );
  }
);