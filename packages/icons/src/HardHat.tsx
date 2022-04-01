import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const HardHat = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z'/>
          <path  d='M10 10V5a1 1 0 011-1h2a1 1 0 011 1v5'/>
          <path  d='M4 15v-3a6 6 0 016-6h0'/>
          <path  d='M14 6h0a6 6 0 016 6v3'/>
        </svg>
    );
  }
);