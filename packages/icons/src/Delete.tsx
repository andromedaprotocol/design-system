import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Delete = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z'/>
          <line  x1='18' y1='9' x2='12' y2='15'/>
          <line  x1='12' y1='9' x2='18' y2='15'/>
        </svg>
    );
  }
);