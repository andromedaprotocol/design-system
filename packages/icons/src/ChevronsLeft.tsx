import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronsLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='11 17 6 12 11 7'/>
          <polyline  points='18 17 13 12 18 7'/>
        </svg>
    );
  }
);