import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FastForward = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='13 19 22 12 13 5 13 19'/>
          <polygon  points='2 19 11 12 2 5 2 19'/>
        </svg>
    );
  }
);