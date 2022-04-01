import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FunctionSquare = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3'/>
          <path  d='M9 11.2h5.7'/>
        </svg>
    );
  }
);