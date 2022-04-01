import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LogIn = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4'/>
          <polyline  points='10 17 15 12 10 7'/>
          <line  x1='15' y1='12' x2='3' y2='12'/>
        </svg>
    );
  }
);