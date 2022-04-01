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

export const Landmark = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='3' y1='22' x2='21' y2='22'/>
          <line  x1='6' y1='18' x2='6' y2='11'/>
          <line  x1='10' y1='18' x2='10' y2='11'/>
          <line  x1='14' y1='18' x2='14' y2='11'/>
          <line  x1='18' y1='18' x2='18' y2='11'/>
          <polygon  points='12 2 20 7 4 7'/>
        </svg>
    );
  }
);