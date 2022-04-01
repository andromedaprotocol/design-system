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

export const AlignHorizontalDistributeCenter = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='5' width='6' height='14' rx='2'/>
          <rect  x='14' y='7' width='6' height='10' rx='2'/>
          <path  d='M17 22v-5'/>
          <path  d='M17 7V2'/>
          <path  d='M7 22v-3'/>
          <path  d='M7 5V2'/>
        </svg>
    );
  }
);