import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Tornado = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 4H3'/>
          <path  d='M18 8H6'/>
          <path  d='M19 12H9'/>
          <path  d='M16 16h-6'/>
          <path  d='M11 20H9'/>
        </svg>
    );
  }
);