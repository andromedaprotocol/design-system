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

export const EqualNot = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='5' y1='9' x2='19' y2='9'/>
          <line  x1='5' y1='15' x2='19' y2='15'/>
          <line  x1='19' y1='5' x2='5' y2='19'/>
        </svg>
    );
  }
);