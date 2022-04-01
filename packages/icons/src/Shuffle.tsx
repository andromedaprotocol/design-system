import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Shuffle = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='16 3 21 3 21 8'/>
          <line  x1='4' y1='20' x2='21' y2='3'/>
          <polyline  points='21 16 21 21 16 21'/>
          <line  x1='15' y1='15' x2='21' y2='21'/>
          <line  x1='4' y1='4' x2='9' y2='9'/>
        </svg>
    );
  }
);