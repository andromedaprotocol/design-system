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

export const Server = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='2' width='20' height='8' rx='2' ry='2'/>
          <rect  x='2' y='14' width='20' height='8' rx='2' ry='2'/>
          <line  x1='6' y1='6' x2='6.01' y2='6'/>
          <line  x1='6' y1='18' x2='6.01' y2='18'/>
        </svg>
    );
  }
);