import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Lasso = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7 22a5 5 0 01-2-4'/>
          <path  d='M3.3 14A6.8 6.8 0 012 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 01-5-1'/>
          <path  d='M5 18a2 2 0 100-4 2 2 0 000 4z'/>
        </svg>
    );
  }
);