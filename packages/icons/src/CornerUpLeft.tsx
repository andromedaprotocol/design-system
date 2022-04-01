import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerUpLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='9 14 4 9 9 4'/>
          <path  d='M20 20v-7a4 4 0 00-4-4H4'/>
        </svg>
    );
  }
);