import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Expand = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 21l-6-6m6 6v-4.8m0 4.8h-4.8'/>
          <path  d='M3 16.2V21m0 0h4.8M3 21l6-6'/>
          <path  d='M21 7.8V3m0 0h-4.8M21 3l-6 6'/>
          <path  d='M3 7.8V3m0 0h4.8M3 3l6 6'/>
        </svg>
    );
  }
);