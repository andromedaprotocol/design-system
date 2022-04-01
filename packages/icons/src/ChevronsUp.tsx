import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronsUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='17 11 12 6 7 11'/>
          <polyline  points='17 18 12 13 7 18'/>
        </svg>
    );
  }
);