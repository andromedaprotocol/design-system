import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Flashlight = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 6c0 2-2 2-2 4v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4V2h12z'/>
          <line  x1='6' y1='6' x2='18' y2='6'/>
          <line  x1='12' y1='12' x2='12' y2='12'/>
        </svg>
    );
  }
);