import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Battery = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='2' y='7' width='16' height='10' rx='2' ry='2'/>
          <line  x1='22' x2='22' y1='11' y2='13'/>
        </svg>
    );
  }
);