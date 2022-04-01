import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CheckCircle = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M22 11.08V12a10 10 0 11-5.93-9.14'/>
          <polyline  points='22 4 12 14.01 9 11.01'/>
        </svg>
    );
  }
);