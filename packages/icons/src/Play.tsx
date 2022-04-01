import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Play = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='5 3 19 12 5 21 5 3'/>
        </svg>
    );
  }
);