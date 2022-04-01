import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Minimize2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='4 14 10 14 10 20'/>
          <polyline  points='20 10 14 10 14 4'/>
          <line  x1='14' y1='10' x2='21' y2='3'/>
          <line  x1='3' y1='21' x2='10' y2='14'/>
        </svg>
    );
  }
);