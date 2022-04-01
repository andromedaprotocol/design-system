import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Hand = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0'/>
          <path  d='M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2'/>
          <path  d='M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8'/>
          <path  d='M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15'/>
        </svg>
    );
  }
);