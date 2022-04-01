import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlertTriangle = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'/>
          <line  x1='12' y1='9' x2='12' y2='13'/>
          <line  x1='12' y1='17' x2='12.01' y2='17'/>
        </svg>
    );
  }
);