import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RotateCcw = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 13a9 9 0 103-7.7L3 8'/>
        </svg>
    );
  }
);