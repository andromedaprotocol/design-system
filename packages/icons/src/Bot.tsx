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

export const Bot = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='11' width='18' height='10' rx='2'/>
          <circle  cx='12' cy='5' r='2'/>
          <path  d='M12 7v4'/>
          <line  x1='8' y1='16' x2='8' y2='16'/>
          <line  x1='16' y1='16' x2='16' y2='16'/>
        </svg>
    );
  }
);