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

export const DivideCircle = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='8' y1='12' x2='16' y2='12'/>
          <line  x1='12' y1='16' x2='12' y2='16'/>
          <line  x1='12' y1='8' x2='12' y2='8'/>
          <circle  cx='12' cy='12' r='10'/>
        </svg>
    );
  }
);