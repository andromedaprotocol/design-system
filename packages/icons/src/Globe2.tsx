import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Globe2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M15 21v-4a2 2 0 012-2h4'/>
          <path  d='M7 4v2a3 3 0 003 2h0a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h3'/>
          <path  d='M3 11h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v4'/>
          <circle  cx='12' cy='12' r='10'/>
        </svg>
    );
  }
);