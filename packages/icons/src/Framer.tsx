import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Framer = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7'/>
        </svg>
    );
  }
);