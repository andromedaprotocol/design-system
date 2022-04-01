import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Filter = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'/>
        </svg>
    );
  }
);