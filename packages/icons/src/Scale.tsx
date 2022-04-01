import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Scale = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 16l3-8 3.001 8A5.002 5.002 0 0116 16z'/>
          <path  d='M2 16l3-8 3.001 8A5.002 5.002 0 012 16z'/>
          <path  d='M7 21h10'/>
          <path  d='M12 3v18'/>
          <path  d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'/>
        </svg>
    );
  }
);