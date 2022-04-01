import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Scan = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 7V5a2 2 0 012-2h2'/>
          <path  d='M17 3h2a2 2 0 012 2v2'/>
          <path  d='M21 17v2a2 2 0 01-2 2h-2'/>
          <path  d='M7 21H5a2 2 0 01-2-2v-2'/>
        </svg>
    );
  }
);