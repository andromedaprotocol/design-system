import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronLast = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='7 18 13 12 7 6'/>
          <path  d='M17 6v12'/>
        </svg>
    );
  }
);