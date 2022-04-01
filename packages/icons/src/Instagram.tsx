import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Instagram = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='2' y='2' width='20' height='20' rx='5' ry='5'/>
          <path  d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z'/>
          <line  x1='17.5' y1='6.5' x2='17.51' y2='6.5'/>
        </svg>
    );
  }
);