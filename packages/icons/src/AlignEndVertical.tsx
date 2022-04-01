import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignEndVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='2' y='4' width='16' height='6' rx='2'/>
          <rect  x='9' y='14' width='9' height='6' rx='2'/>
          <path  d='M22 22V2'/>
        </svg>
    );
  }
);