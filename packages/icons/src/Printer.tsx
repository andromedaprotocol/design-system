import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Printer = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='6 9 6 2 18 2 18 9'/>
          <path  d='M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2'/>
          <rect  x='6' y='14' width='12' height='8'/>
        </svg>
    );
  }
);