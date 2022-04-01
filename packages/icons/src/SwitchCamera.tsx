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

export const SwitchCamera = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5'/>
          <path  d='M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5'/>
          <circle  cx='12' cy='12' r='3'/>
          <path  d='M18 22l-3-3 3-3'/>
          <path  d='M6 2l3 3-3 3'/>
        </svg>
    );
  }
);