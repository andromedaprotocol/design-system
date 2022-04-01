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

export const AlignVerticalSpaceBetween = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='15' width='14' height='6' rx='2'/>
          <rect  x='7' y='3' width='10' height='6' rx='2'/>
          <path  d='M2 21h20'/>
          <path  d='M2 3h20'/>
        </svg>
    );
  }
);