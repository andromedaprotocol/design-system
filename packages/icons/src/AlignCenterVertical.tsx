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

export const AlignCenterVertical = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 2v20'/>
          <path  d='M8 10H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4'/>
          <path  d='M16 10h4a2 2 0 002-2V6a2 2 0 00-2-2h-4'/>
          <path  d='M8 20H7a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h1'/>
          <path  d='M16 14h1a2 2 0 012 2v2a2 2 0 01-2 2h-1'/>
        </svg>
    );
  }
);