import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Tv2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7 21h10'/>
          <rect  x='2' y='3' width='20' height='14' rx='2'/>
        </svg>
    );
  }
);