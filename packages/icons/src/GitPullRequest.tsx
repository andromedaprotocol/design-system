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

export const GitPullRequest = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='18' cy='18' r='3'/>
          <circle  cx='6' cy='6' r='3'/>
          <path  d='M13 6h3a2 2 0 012 2v7'/>
          <line  x1='6' y1='9' x2='6' y2='21'/>
        </svg>
    );
  }
);