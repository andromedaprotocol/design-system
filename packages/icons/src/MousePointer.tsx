import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MousePointer = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'/>
          <path  d='M13 13l6 6'/>
        </svg>
    );
  }
);