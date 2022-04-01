import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='12' y1='19' x2='12' y2='5'/>
          <polyline  points='5 12 12 5 19 12'/>
        </svg>
    );
  }
);