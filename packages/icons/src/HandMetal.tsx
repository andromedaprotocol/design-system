import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const HandMetal = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 12.5V10a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'/>
          <path  d='M14 11V9a2 2 0 10-4 0v2'/>
          <path  d='M10 10.5V5a2 2 0 10-4 0v9'/>
          <path  d='M7 15l-1.76-1.76a2 2 0 00-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 008-8V7a2 2 0 10-4 0v5'/>
        </svg>
    );
  }
);