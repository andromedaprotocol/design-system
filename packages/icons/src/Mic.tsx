import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Mic = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z'/>
          <path  d='M19 10v2a7 7 0 01-14 0v-2'/>
          <line  x1='12' y1='19' x2='12' y2='23'/>
          <line  x1='8' y1='23' x2='16' y2='23'/>
        </svg>
    );
  }
);