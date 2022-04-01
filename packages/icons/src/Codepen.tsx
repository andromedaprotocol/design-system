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

export const Codepen = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'/>
          <line  x1='12' y1='22' x2='12' y2='15.5'/>
          <polyline  points='22 8.5 12 15.5 2 8.5'/>
          <polyline  points='2 15.5 12 8.5 22 15.5'/>
          <line  x1='12' y1='2' x2='12' y2='8.5'/>
        </svg>
    );
  }
);