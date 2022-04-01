import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Terminal = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='4 17 10 11 4 5'/>
          <line  x1='12' y1='19' x2='20' y2='19'/>
        </svg>
    );
  }
);