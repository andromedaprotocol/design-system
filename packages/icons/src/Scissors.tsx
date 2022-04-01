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

export const Scissors = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='6' cy='6' r='3'/>
          <circle  cx='6' cy='18' r='3'/>
          <line  x1='20' y1='4' x2='8.12' y2='15.88'/>
          <line  x1='14.47' y1='14.48' x2='20' y2='20'/>
          <line  x1='8.12' y1='8.12' x2='12' y2='12'/>
        </svg>
    );
  }
);