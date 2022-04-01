import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Maximize2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='15 3 21 3 21 9'/>
          <polyline  points='9 21 3 21 3 15'/>
          <line  x1='21' y1='3' x2='14' y2='10'/>
          <line  x1='3' y1='21' x2='10' y2='14'/>
        </svg>
    );
  }
);