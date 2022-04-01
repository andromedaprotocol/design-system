import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ListOrdered = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='10' y1='6' x2='21' y2='6'/>
          <line  x1='10' y1='12' x2='21' y2='12'/>
          <line  x1='10' y1='18' x2='21' y2='18'/>
          <path  d='M4 6h1v4'/>
          <path  d='M4 10h2'/>
          <path  d='M6 18H4c0-1 2-2 2-3s-1-1.5-2-1'/>
        </svg>
    );
  }
);