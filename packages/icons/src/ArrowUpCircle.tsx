import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowUpCircle = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='10'/>
          <polyline  points='16 12 12 8 8 12'/>
          <line  x1='12' y1='16' x2='12' y2='8'/>
        </svg>
    );
  }
);