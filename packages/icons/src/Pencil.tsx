import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Pencil = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='18' y1='2' x2='22' y2='6'/>
          <path  d='M7.5 20.5L19 9l-4-4L3.5 16.5 2 22z'/>
        </svg>
    );
  }
);