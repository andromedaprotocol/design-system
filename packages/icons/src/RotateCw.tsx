import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RotateCw = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 13a9 9 0 11-3-7.7L21 8'/>
        </svg>
    );
  }
);