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

export const PenTool = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 19l7-7 3 3-7 7-3-3z'/>
          <path  d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'/>
          <path  d='M2 2l7.586 7.586'/>
          <circle  cx='11' cy='11' r='2'/>
        </svg>
    );
  }
);