import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Minus = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='5' y1='12' x2='19' y2='12'/>
        </svg>
    );
  }
);