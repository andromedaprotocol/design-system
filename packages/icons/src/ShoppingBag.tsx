import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ShoppingBag = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'/>
          <line  x1='3' y1='6' x2='21' y2='6'/>
          <path  d='M16 10a4 4 0 01-8 0'/>
        </svg>
    );
  }
);