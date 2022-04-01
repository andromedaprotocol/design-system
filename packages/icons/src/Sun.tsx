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

export const Sun = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='4'/>
          <path  d='M12 2v2'/>
          <path  d='M12 20v2'/>
          <path  d='M5 5l1.5 1.5'/>
          <path  d='M17.5 17.5L19 19'/>
          <path  d='M2 12h2'/>
          <path  d='M20 12h2'/>
          <path  d='M5 19l1.5-1.5'/>
          <path  d='M17.5 6.5L19 5'/>
        </svg>
    );
  }
);