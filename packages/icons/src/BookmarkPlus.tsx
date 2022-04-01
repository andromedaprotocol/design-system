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

export const BookmarkPlus = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z'/>
          <line  x1='12' x2='12' y1='7' y2='13'/>
          <line  x1='15' x2='9' y1='10' y2='10'/>
        </svg>
    );
  }
);