import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Navigation = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='3 11 22 2 13 21 11 13 3 11'/>
        </svg>
    );
  }
);