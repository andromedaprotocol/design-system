import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Zap = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/>
        </svg>
    );
  }
);