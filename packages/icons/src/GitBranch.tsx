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

export const GitBranch = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='6' y1='3' x2='6' y2='15'/>
          <circle  cx='18' cy='6' r='3'/>
          <circle  cx='6' cy='18' r='3'/>
          <path  d='M18 9a9 9 0 01-9 9'/>
        </svg>
    );
  }
);