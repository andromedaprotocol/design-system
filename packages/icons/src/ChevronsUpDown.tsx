import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ChevronsUpDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7 15l5 5 5-5'/>
          <path  d='M7 9l5-5 5 5'/>
        </svg>
    );
  }
);