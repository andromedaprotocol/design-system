import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FlashlightOff = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 16v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4'/>
          <path  d='M7 2h11v4c0 2-2 2-2 4v1'/>
          <line  x1='11' y1='6' x2='18' y2='6'/>
          <line  x1='2' y1='2' x2='22' y2='22'/>
        </svg>
    );
  }
);