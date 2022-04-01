import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Code = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='16 18 22 12 16 6'/>
          <polyline  points='8 6 2 12 8 18'/>
        </svg>
    );
  }
);