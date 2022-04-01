import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const User = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'/>
          <circle  cx='12' cy='7' r='4'/>
        </svg>
    );
  }
);