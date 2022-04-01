import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Eye = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/>
          <circle  cx='12' cy='12' r='3'/>
        </svg>
    );
  }
);