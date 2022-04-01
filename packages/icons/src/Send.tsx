import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Send = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='22' y1='2' x2='11' y2='13'/>
          <polygon  points='22 2 15 22 11 13 2 9 22 2'/>
        </svg>
    );
  }
);