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

export const ImageMinus = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8'/>
          <path  d='M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/>
          <path  d='M21 15l-5-5L5 21'/>
          <path  d='M22 5h-6'/>
        </svg>
    );
  }
);