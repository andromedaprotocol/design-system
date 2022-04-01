import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignVerticalSpaceAround = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='7' y='9' width='10' height='6' rx='2'/>
          <path  d='M22 20H2'/>
          <path  d='M22 4H2'/>
        </svg>
    );
  }
);