import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const WrapText = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='3' y1='6' x2='21' y2='6'/>
          <path  d='M3 12h15a3 3 0 110 6h-4'/>
          <polyline  points='16 16 14 18 16 20'/>
          <line  x1='3' y1='18' x2='10' y2='18'/>
        </svg>
    );
  }
);