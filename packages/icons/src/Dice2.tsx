import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Dice2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <path  d='M15 9h.01'/>
          <path  d='M9 15h.01'/>
        </svg>
    );
  }
);