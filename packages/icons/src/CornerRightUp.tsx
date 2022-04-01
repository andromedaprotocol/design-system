import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerRightUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='10 9 15 4 20 9'/>
          <path  d='M4 20h7a4 4 0 004-4V4'/>
        </svg>
    );
  }
);