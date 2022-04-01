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

export const AlignHorizontalSpaceBetween = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='5' width='6' height='14' rx='2'/>
          <rect  x='15' y='7' width='6' height='10' rx='2'/>
          <path  d='M3 2v20'/>
          <path  d='M21 2v20'/>
        </svg>
    );
  }
);