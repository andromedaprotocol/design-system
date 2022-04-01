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

export const Currency = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='8'/>
          <line  x1='3' y1='3' x2='6' y2='6'/>
          <line  x1='21' y1='3' x2='18' y2='6'/>
          <line  x1='3' y1='21' x2='6' y2='18'/>
          <line  x1='21' y1='21' x2='18' y2='18'/>
        </svg>
    );
  }
);