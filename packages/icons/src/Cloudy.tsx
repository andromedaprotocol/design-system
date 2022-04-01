import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Cloudy = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17.5 21a4.5 4.5 0 100-9h-1.8A7 7 0 109 21h8.5z'/>
          <path  d='M22 10c0-1.5-1.5-3-3.5-3H17c-.7-2.3-2.9-4-5.4-4-2.7 0-5 2-5.5 4.5'/>
        </svg>
    );
  }
);