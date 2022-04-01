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

export const AlignCenterHorizontal = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 12h20'/>
          <path  d='M10 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4'/>
          <path  d='M10 8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v4'/>
          <path  d='M20 16v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1'/>
          <path  d='M14 8V7c0-1.1.9-2 2-2h2a2 2 0 012 2v1'/>
        </svg>
    );
  }
);