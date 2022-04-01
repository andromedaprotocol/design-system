import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BellRing = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'/>
          <path  d='M13.73 21a2 2 0 01-3.46 0'/>
          <path  d='M2 8c0-2.2.7-4.3 2-6'/>
          <path  d='M22 8a10 10 0 00-2-6'/>
        </svg>
    );
  }
);