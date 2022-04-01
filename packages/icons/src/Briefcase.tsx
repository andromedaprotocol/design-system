import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Briefcase = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='2' y='7' width='20' height='14' rx='2' ry='2'/>
          <path  d='M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'/>
        </svg>
    );
  }
);