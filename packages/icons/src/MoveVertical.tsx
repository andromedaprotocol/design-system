import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MoveVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='8 18 12 22 16 18'/>
          <polyline  points='8 6 12 2 16 6'/>
          <line  x1='12' y1='2' x2='12' y2='22'/>
        </svg>
    );
  }
);