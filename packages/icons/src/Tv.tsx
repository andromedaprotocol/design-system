import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Tv = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='2' y='7' width='20' height='15' rx='2' ry='2'/>
          <polyline  points='17 2 12 7 7 2'/>
        </svg>
    );
  }
);