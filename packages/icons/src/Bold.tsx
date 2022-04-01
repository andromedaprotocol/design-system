import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Bold = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z'/>
          <path  d='M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z'/>
        </svg>
    );
  }
);