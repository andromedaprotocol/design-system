import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Shovel = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M2 22v-5l5-5 5 5-5 5z'/>
          <path  d='M9.5 14.5L16 8'/>
          <path  d='M17 2l5 5-.5.5a3.53 3.53 0 01-5 0s0 0 0 0a3.53 3.53 0 010-5L17 2'/>
        </svg>
    );
  }
);