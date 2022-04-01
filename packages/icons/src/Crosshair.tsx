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

export const Crosshair = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='22' y1='12' x2='18' y2='12'/>
          <line  x1='6' y1='12' x2='2' y2='12'/>
          <line  x1='12' y1='6' x2='12' y2='2'/>
          <line  x1='12' y1='22' x2='12' y2='18'/>
        </svg>
    );
  }
);