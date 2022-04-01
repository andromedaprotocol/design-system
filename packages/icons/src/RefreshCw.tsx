import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RefreshCw = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 2v6h-6'/>
          <path  d='M3 12a9 9 0 0115-6.7L21 8'/>
          <path  d='M3 22v-6h6'/>
          <path  d='M21 12a9 9 0 01-15 6.7L3 16'/>
        </svg>
    );
  }
);