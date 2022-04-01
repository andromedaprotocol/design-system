import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Wifi = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5 13a10 10 0 0114 0'/>
          <path  d='M8.5 16.5a5 5 0 017 0'/>
          <path  d='M2 8.82a15 15 0 0120 0'/>
          <line  x1='12' y1='20' x2='12.01' y2='20'/>
        </svg>
    );
  }
);