import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignStartVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='6' y='14' width='9' height='6' rx='2'/>
          <rect  x='6' y='4' width='16' height='6' rx='2'/>
          <path  d='M2 2v20'/>
        </svg>
    );
  }
);