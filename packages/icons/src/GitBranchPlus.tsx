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

export const GitBranchPlus = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 3v12'/>
          <path  d='M18 9a3 3 0 100-6 3 3 0 000 6z'/>
          <path  d='M6 21a3 3 0 100-6 3 3 0 000 6z'/>
          <path  d='M15 6a9 9 0 00-9 9'/>
          <path  d='M18 15v6'/>
          <path  d='M21 18h-6'/>
        </svg>
    );
  }
);