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

export const Haze = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M5.2 6.2l1.4 1.4'/>
          <path  d='M2 13h2'/>
          <path  d='M20 13h2'/>
          <path  d='M17.4 7.6l1.4-1.4'/>
          <path  d='M22 17H2'/>
          <path  d='M22 21H2'/>
          <path  d='M16 13a4 4 0 00-8 0'/>
          <path  d='M12 5V2.5'/>
        </svg>
    );
  }
);