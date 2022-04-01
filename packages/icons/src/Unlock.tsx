import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Unlock = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='11' width='18' height='11' rx='2' ry='2'/>
          <path  d='M7 11V7a5 5 0 019.9-1'/>
        </svg>
    );
  }
);