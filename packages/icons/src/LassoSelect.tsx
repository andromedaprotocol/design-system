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

export const LassoSelect = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 22a5 5 0 01-2-4'/>
          <path  d='M7 16.93c.96.43 1.96.74 2.99.91'/>
          <path  d='M3.34 14A6.8 6.8 0 012 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 01-.33 2'/>
          <path  d='M5 18a2 2 0 100-4 2 2 0 000 4z'/>
          <path  d='M14.33 22h-.09a.35.35 0 01-.24-.32v-10a.34.34 0 01.33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 01-.21.59h-4.49l-2.57 3.85a.35.35 0 01-.28.14v0z'/>
        </svg>
    );
  }
);