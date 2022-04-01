import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Coffee = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 8h1a4 4 0 010 8h-1'/>
          <path  d='M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z'/>
          <line  x1='6' y1='1' x2='6' y2='4'/>
          <line  x1='10' y1='1' x2='10' y2='4'/>
          <line  x1='14' y1='1' x2='14' y2='4'/>
        </svg>
    );
  }
);