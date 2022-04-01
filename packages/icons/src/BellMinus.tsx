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

export const BellMinus = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M13.73 21a2 2 0 01-3.46 0'/>
          <path  d='M21 5h-6'/>
          <path  d='M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'/>
        </svg>
    );
  }
);