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

export const LifeBuoy = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <circle  cx='12' cy='12' r='4'/>
          <line  x1='4.93' y1='4.93' x2='9.17' y2='9.17'/>
          <line  x1='14.83' y1='14.83' x2='19.07' y2='19.07'/>
          <line  x1='14.83' y1='9.17' x2='19.07' y2='4.93'/>
          <line  x1='14.83' y1='9.17' x2='18.36' y2='5.64'/>
          <line  x1='4.93' y1='19.07' x2='9.17' y2='14.83'/>
        </svg>
    );
  }
);