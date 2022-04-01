import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignHorizontalSpaceAround = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='9' y='7' width='6' height='10' rx='2'/>
          <path  d='M4 22V2'/>
          <path  d='M20 22V2'/>
        </svg>
    );
  }
);