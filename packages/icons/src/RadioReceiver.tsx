import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RadioReceiver = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5 16v2'/>
          <path  d='M19 16v2'/>
          <rect  x='2' y='8' width='20' height='8' rx='2'/>
          <path  d='M18 12h0'/>
        </svg>
    );
  }
);