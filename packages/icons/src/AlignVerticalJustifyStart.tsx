import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignVerticalJustifyStart = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='5' y='16' width='14' height='6' rx='2'/>
          <rect  x='7' y='6' width='10' height='6' rx='2'/>
          <path  d='M2 2h20'/>
        </svg>
    );
  }
);