import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CloudMoon = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z'/>
          <path  d='M9.95 9a6.13 6.13 0 015.5-5.18 4.77 4.77 0 006.67 6.67A6.13 6.13 0 0119.46 15'/>
        </svg>
    );
  }
);