import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Anchor = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='5' r='3'/>
          <line  x1='12' y1='22' x2='12' y2='8'/>
          <path  d='M5 12H2a10 10 0 0020 0h-3'/>
        </svg>
    );
  }
);