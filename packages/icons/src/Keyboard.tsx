import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Keyboard = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='2' y='4' width='20' height='16' rx='2' ry='2'/>
          <path  d='M6 8h.001'/>
          <path  d='M10 8h.001'/>
          <path  d='M14 8h.001'/>
          <path  d='M18 8h.001'/>
          <path  d='M8 12h.001'/>
          <path  d='M12 12h.001'/>
          <path  d='M16 12h.001'/>
          <path  d='M7 16h10'/>
        </svg>
    );
  }
);