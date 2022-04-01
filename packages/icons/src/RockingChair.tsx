import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RockingChair = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='3.5 2 6.5 12.5 18 12.5'/>
          <line  x1='9.5' y1='12.5' x2='5.5' y2='20'/>
          <line  x1='15' y1='12.5' x2='18.5' y2='20'/>
          <path  d='M2.75 18a13 13 0 0018.5 0'/>
        </svg>
    );
  }
);