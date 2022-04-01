import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Share = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8'/>
          <polyline  points='16 6 12 2 8 6'/>
          <line  x1='12' y1='2' x2='12' y2='15'/>
        </svg>
    );
  }
);