import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Package = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='16.5' y1='9.4' x2='7.5' y2='4.21'/>
          <path  d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'/>
          <polyline  points='3.27 6.96 12 12.01 20.73 6.96'/>
          <line  x1='12' y1='22.08' x2='12' y2='12'/>
        </svg>
    );
  }
);