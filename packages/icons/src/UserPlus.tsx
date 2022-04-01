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

export const UserPlus = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'/>
          <circle  cx='8.5' cy='7' r='4'/>
          <line  x1='20' y1='8' x2='20' y2='14'/>
          <line  x1='23' y1='11' x2='17' y2='11'/>
        </svg>
    );
  }
);