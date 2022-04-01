import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Forward = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='15 17 20 12 15 7'/>
          <path  d='M4 18v-2a4 4 0 014-4h12'/>
        </svg>
    );
  }
);