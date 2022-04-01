import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MoveDiagonal2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='5 11 5 5 11 5'/>
          <polyline  points='19 13 19 19 13 19'/>
          <line  x1='5' y1='5' x2='19' y2='19'/>
        </svg>
    );
  }
);