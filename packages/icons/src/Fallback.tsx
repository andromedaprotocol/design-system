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

export const Fallback = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <g  stroke='currentColor'/>
          <path  fill='none' d='M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'/>
          <path  fill='currentColor' d='M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'/>
          <circle  fill='none' cx='12' cy='12' r='11.25'/>
        </svg>
    );
  }
);