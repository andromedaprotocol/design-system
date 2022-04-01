import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Crop = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M6.13 1L6 16a2 2 0 002 2h15'/>
          <path  d='M1 6.13L16 6a2 2 0 012 2v15'/>
        </svg>
    );
  }
);