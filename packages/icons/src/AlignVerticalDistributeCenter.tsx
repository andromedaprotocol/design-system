import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignVerticalDistributeCenter = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='5' y='14' width='14' height='6' rx='2'/>
          <rect  x='7' y='4' width='10' height='6' rx='2'/>
          <path  d='M22 7h-5'/>
          <path  d='M7 7H1'/>
          <path  d='M22 17h-3'/>
          <path  d='M5 17H2'/>
        </svg>
    );
  }
);