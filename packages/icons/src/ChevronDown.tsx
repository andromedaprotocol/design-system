import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='6 9 12 15 18 9'/>
        </svg>
    );
  }
);