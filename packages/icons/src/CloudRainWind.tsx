import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CloudRainWind = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'/>
          <path  d='M9.2 22l3-7'/>
          <path  d='M9 13l-3 7'/>
          <path  d='M17 13l-3 7'/>
        </svg>
    );
  }
);