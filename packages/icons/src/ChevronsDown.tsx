import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronsDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='7 13 12 18 17 13'/>
          <polyline  points='7 6 12 11 17 6'/>
        </svg>
    );
  }
);