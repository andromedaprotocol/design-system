import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Power = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18.36 6.64a9 9 0 11-12.73 0'/>
          <line  x1='12' y1='2' x2='12' y2='12'/>
        </svg>
    );
  }
);