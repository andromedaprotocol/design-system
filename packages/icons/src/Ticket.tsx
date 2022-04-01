import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Ticket = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 15v2a2 2 0 002 2h14a2 2 0 002-2v-2'/>
          <path  d='M21 15a3 3 0 110-6'/>
          <path  d='M3 15a3 3 0 100-6'/>
          <path  d='M13 5v2'/>
          <path  d='M13 17v2'/>
          <path  d='M13 11v2'/>
        </svg>
    );
  }
);