import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ImagePlus = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8'/>
          <path  d='M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/>
          <path  d='M21 15l-5-5L5 21'/>
          <path  d='M19 2v6'/>
          <path  d='M22 5h-6'/>
        </svg>
    );
  }
);