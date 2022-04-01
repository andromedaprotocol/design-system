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

export const Contact = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z'/>
          <line  x1='16' y1='2' x2='16' y2='4'/>
          <line  x1='8' y1='2' x2='8' y2='4'/>
          <circle  cx='12' cy='11' r='3'/>
          <path  d='M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5'/>
        </svg>
    );
  }
);