import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Inspect = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M19 11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2h7'/>
          <path  d='M12 12l4.166 10 1.48-4.355L22 16.166 12 12z'/>
          <path  d='M18 18l3 3'/>
        </svg>
    );
  }
);