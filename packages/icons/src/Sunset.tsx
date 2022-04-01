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

export const Sunset = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 10V2'/>
          <path  d='M5.2 11.2l1.4 1.4'/>
          <path  d='M2 18h2'/>
          <path  d='M20 18h2'/>
          <path  d='M17.4 12.6l1.4-1.4'/>
          <path  d='M22 22H2'/>
          <path  d='M16 6l-4 4-4-4'/>
          <path  d='M16 18a4 4 0 00-8 0'/>
        </svg>
    );
  }
);