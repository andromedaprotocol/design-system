import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SkipBack = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='19 20 9 12 19 4 19 20'/>
          <line  x1='5' y1='19' x2='5' y2='5'/>
        </svg>
    );
  }
);