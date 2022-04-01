import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Underline = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M6 4v6a6 6 0 0012 0V4'/>
          <line  x1='4' y1='20' x2='20' y2='20'/>
        </svg>
    );
  }
);