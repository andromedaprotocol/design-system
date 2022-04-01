import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Ruler = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 2l6 6L8 22l-6-6L16 2'/>
          <path  d='M7.5 10.5l2 2'/>
          <path  d='M10.5 7.5l2 2'/>
          <path  d='M13.5 4.5l2 2'/>
          <path  d='M4.5 13.5l2 2'/>
        </svg>
    );
  }
);