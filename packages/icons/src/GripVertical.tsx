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

export const GripVertical = React.forwardRef<any, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='9' cy='12' r='1'/>
          <circle  cx='9' cy='5' r='1'/>
          <circle  cx='9' cy='19' r='1'/>
          <circle  cx='15' cy='12' r='1'/>
          <circle  cx='15' cy='5' r='1'/>
          <circle  cx='15' cy='19' r='1'/>
        </svg>
    );
  }
);