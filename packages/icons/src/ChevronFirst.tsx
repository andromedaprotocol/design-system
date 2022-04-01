import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronFirst = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='17 18 11 12 17 6'/>
          <path  d='M7 6v12'/>
        </svg>
    );
  }
);