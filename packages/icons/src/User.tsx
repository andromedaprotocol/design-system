import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const User = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
          <path  d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'/>
          <circle  cx='12' cy='7' r='4'/>
        </svg>
    );
  }
);