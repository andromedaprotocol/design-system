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

export const Wand = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 4V2'/>
          <path  d='M15 16v-2'/>
          <path  d='M8 9h2'/>
          <path  d='M20 9h2'/>
          <path  d='M17.8 11.8L19 13'/>
          <path  d='M15 9h0'/>
          <path  d='M17.8 6.2L19 5'/>
          <path  d='M3 21l9-9'/>
          <path  d='M12.2 6.2L11 5'/>
        </svg>
    );
  }
);