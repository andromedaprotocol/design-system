import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SortAsc = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M11 5h4'/>
          <path  d='M11 9h7'/>
          <path  d='M11 13h10'/>
          <path  d='M3 17l3 3 3-3'/>
          <path  d='M6 18V4'/>
        </svg>
    );
  }
);