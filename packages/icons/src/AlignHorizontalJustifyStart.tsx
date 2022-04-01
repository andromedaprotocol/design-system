import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignHorizontalJustifyStart = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='6' y='5' width='6' height='14' rx='2'/>
          <rect  x='16' y='7' width='6' height='10' rx='2'/>
          <path  d='M2 2v20'/>
        </svg>
    );
  }
);