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

export const CloudOff = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 2l20 20'/>
          <path  d='M10 5a7 7 0 015.7 5h1.8a4.5 4.5 0 014 6.5'/>
          <path  d='M18.8 18.8c-.4.2-.8.2-1.3.2H9A7 7 0 015.8 5.8'/>
        </svg>
    );
  }
);