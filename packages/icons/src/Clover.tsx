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

export const Clover = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16.2 3.8a2.7 2.7 0 00-3.81 0l-.4.38-.4-.4a2.7 2.7 0 00-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z'/>
          <path  d='M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 000 3.81l.38.4-.4.4a2.7 2.7 0 000 3.82C4.85 17.27 6.64 17.33 8 16'/>
          <path  d='M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 000-3.81l-.38-.4.4-.4a2.7 2.7 0 000-3.82C19.15 6.73 17.36 6.67 16 8'/>
          <path  d='M7.8 20.2a2.7 2.7 0 003.81 0l.4-.38.4.4a2.7 2.7 0 003.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z'/>
          <path  d='M7 17l-5 5'/>
        </svg>
    );
  }
);