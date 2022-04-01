import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Repeat = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17 2l4 4-4 4'/>
          <path  d='M3 11v-1a4 4 0 014-4h14'/>
          <path  d='M7 22l-4-4 4-4'/>
          <path  d='M21 13v1a4 4 0 01-4 4H3'/>
        </svg>
    );
  }
);