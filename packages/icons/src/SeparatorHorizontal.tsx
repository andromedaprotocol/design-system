import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SeparatorHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='3' y1='12' x2='21' y2='12'/>
          <polyline  points='8 8 12 4 16 8'/>
          <polyline  points='16 16 12 20 8 16'/>
        </svg>
    );
  }
);