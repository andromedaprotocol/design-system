import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ListX = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M11 12H3'/>
          <path  d='M16 6H3'/>
          <path  d='M16 18H3'/>
          <path  d='M19 10l-4 4'/>
          <path  d='M15 10l4 4'/>
        </svg>
    );
  }
);