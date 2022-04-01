import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Redo = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 7v6h-6'/>
          <path  d='M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7'/>
        </svg>
    );
  }
);