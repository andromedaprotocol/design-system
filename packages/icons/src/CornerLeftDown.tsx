import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerLeftDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='14 15 9 20 4 15'/>
          <path  d='M20 4h-7a4 4 0 00-4 4v12'/>
        </svg>
    );
  }
);