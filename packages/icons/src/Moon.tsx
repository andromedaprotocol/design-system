import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Moon = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/>
        </svg>
    );
  }
);