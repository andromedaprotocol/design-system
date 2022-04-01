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

export const Share2 = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='18' cy='5' r='3'/>
          <circle  cx='6' cy='12' r='3'/>
          <circle  cx='18' cy='19' r='3'/>
          <line  x1='8.59' y1='13.51' x2='15.42' y2='17.49'/>
          <line  x1='15.41' y1='6.51' x2='8.59' y2='10.49'/>
        </svg>
    );
  }
);