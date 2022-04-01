import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AtSign = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='4'/>
          <path  d='M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94'/>
        </svg>
    );
  }
);