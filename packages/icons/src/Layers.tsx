import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Layers = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='12 2 2 7 12 12 22 7 12 2'/>
          <polyline  points='2 17 12 22 22 17'/>
          <polyline  points='2 12 12 17 22 12'/>
        </svg>
    );
  }
);