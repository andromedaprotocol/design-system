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

export const Database = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <ellipse  cx='12' cy='5' rx='9' ry='3'/>
          <path  d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'/>
          <path  d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/>
        </svg>
    );
  }
);