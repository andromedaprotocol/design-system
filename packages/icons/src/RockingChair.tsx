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

export const RockingChair = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='3.5 2 6.5 12.5 18 12.5'/>
          <line  x1='9.5' y1='12.5' x2='5.5' y2='20'/>
          <line  x1='15' y1='12.5' x2='18.5' y2='20'/>
          <path  d='M2.75 18a13 13 0 0018.5 0'/>
        </svg>
    );
  }
);