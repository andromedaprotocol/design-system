import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignHorizontalDistributeCenter = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='4' y='5' width='6' height='14' rx='2'/>
          <rect  x='14' y='7' width='6' height='10' rx='2'/>
          <path  d='M17 22v-5'/>
          <path  d='M17 7V2'/>
          <path  d='M7 22v-3'/>
          <path  d='M7 5V2'/>
        </svg>
    );
  }
);