import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RefreshCcw = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 2v6h6'/>
          <path  d='M21 12A9 9 0 006 5.3L3 8'/>
          <path  d='M21 22v-6h-6'/>
          <path  d='M3 12a9 9 0 0015 6.7l3-2.7'/>
        </svg>
    );
  }
);