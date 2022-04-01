import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Languages = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5 8l6 6'/>
          <path  d='M4 14l6-6 2-3'/>
          <path  d='M2 5h12'/>
          <path  d='M7 2h1'/>
          <path  d='M22 22l-5-10-5 10'/>
          <path  d='M14 18h6'/>
        </svg>
    );
  }
);