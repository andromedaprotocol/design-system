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

export const ZoomIn = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='11' cy='11' r='8'/>
          <line  x1='21' y1='21' x2='16.65' y2='16.65'/>
          <line  x1='11' y1='8' x2='11' y2='14'/>
          <line  x1='8' y1='11' x2='14' y2='11'/>
        </svg>
    );
  }
);