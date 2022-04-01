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

export const Ruler = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 2l6 6L8 22l-6-6L16 2'/>
          <path  d='M7.5 10.5l2 2'/>
          <path  d='M10.5 7.5l2 2'/>
          <path  d='M13.5 4.5l2 2'/>
          <path  d='M4.5 13.5l2 2'/>
        </svg>
    );
  }
);