import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ServerCrash = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M6 10H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2'/>
          <path  d='M6 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2'/>
          <path  d='M6 6h.01'/>
          <path  d='M6 18h.01'/>
          <path  d='M13 6l-4 6h6l-4 6'/>
        </svg>
    );
  }
);