import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SeparatorVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='12' y1='3' x2='12' y2='21'/>
          <polyline  points='8 8 4 12 8 16'/>
          <polyline  points='16 16 20 12 16 8'/>
        </svg>
    );
  }
);