import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Reply = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='9 17 4 12 9 7'/>
          <path  d='M20 18v-2a4 4 0 00-4-4H4'/>
        </svg>
    );
  }
);