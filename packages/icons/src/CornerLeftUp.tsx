import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerLeftUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='14 9 9 4 4 9'/>
          <path  d='M20 20h-7a4 4 0 01-4-4V4'/>
        </svg>
    );
  }
);