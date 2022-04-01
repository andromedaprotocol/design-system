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

export const GitFork = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='18' r='3'/>
          <circle  cx='6' cy='6' r='3'/>
          <circle  cx='18' cy='6' r='3'/>
          <path  d='M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9'/>
          <path  d='M12 12v3'/>
        </svg>
    );
  }
);