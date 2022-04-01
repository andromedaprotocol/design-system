import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LogOut = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4'/>
          <polyline  points='16 17 21 12 16 7'/>
          <line  x1='21' y1='12' x2='9' y2='12'/>
        </svg>
    );
  }
);