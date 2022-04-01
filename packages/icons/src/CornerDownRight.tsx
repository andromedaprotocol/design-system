import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerDownRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='15 10 20 15 15 20'/>
          <path  d='M4 4v7a4 4 0 004 4h12'/>
        </svg>
    );
  }
);