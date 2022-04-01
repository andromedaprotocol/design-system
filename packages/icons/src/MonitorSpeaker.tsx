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

export const MonitorSpeaker = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M5.5 20H8'/>
          <path  d='M17 9h.01'/>
          <rect  x='12' y='4' width='10' height='16' rx='2'/>
          <path  d='M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4'/>
          <circle  cx='17' cy='15' r='1'/>
        </svg>
    );
  }
);