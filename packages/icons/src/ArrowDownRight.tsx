import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowDownRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='7' y1='7' x2='17' y2='17'/>
          <polyline  points='17 7 17 17 7 17'/>
        </svg>
    );
  }
);