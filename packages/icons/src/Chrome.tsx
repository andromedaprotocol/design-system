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

export const Chrome = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <circle  cx='12' cy='12' r='4'/>
          <line  x1='21.17' y1='8' x2='12' y2='8'/>
          <line  x1='3.95' y1='6.06' x2='8.54' y2='14'/>
          <line  x1='10.88' y1='21.94' x2='15.46' y2='14'/>
        </svg>
    );
  }
);