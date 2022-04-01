import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Grab = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 11.5V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'/>
          <path  d='M14 10V8a2 2 0 00-2-2v0a2 2 0 00-2 2v2'/>
          <path  d='M10 9.9V9a2 2 0 00-2-2v0a2 2 0 00-2 2v5'/>
          <path  d='M6 14v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0'/>
          <path  d='M18 11v0a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0'/>
        </svg>
    );
  }
);