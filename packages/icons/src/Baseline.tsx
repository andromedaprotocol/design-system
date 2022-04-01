import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Baseline = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M4 20h16'/>
          <path  d='M6 16l6-12 6 12'/>
          <path  d='M8 12h8'/>
        </svg>
    );
  }
);