import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Cloud = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17.5 19a4.5 4.5 0 100-9h-1.8A7 7 0 109 19h8.5z'/>
        </svg>
    );
  }
);