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

export const CloudSnow = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'/>
          <path  d='M8 15h0'/>
          <path  d='M8 19h0'/>
          <path  d='M12 17h0'/>
          <path  d='M12 21h0'/>
          <path  d='M16 15h0'/>
          <path  d='M16 19h0'/>
        </svg>
    );
  }
);