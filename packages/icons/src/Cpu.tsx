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

export const Cpu = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='4' width='16' height='16' rx='2' ry='2'/>
          <rect  x='9' y='9' width='6' height='6'/>
          <line  x1='9' y1='1' x2='9' y2='4'/>
          <line  x1='15' y1='1' x2='15' y2='4'/>
          <line  x1='9' y1='20' x2='9' y2='23'/>
          <line  x1='15' y1='20' x2='15' y2='23'/>
          <line  x1='20' y1='9' x2='23' y2='9'/>
          <line  x1='20' y1='14' x2='23' y2='14'/>
          <line  x1='1' y1='9' x2='4' y2='9'/>
          <line  x1='1' y1='14' x2='4' y2='14'/>
        </svg>
    );
  }
);