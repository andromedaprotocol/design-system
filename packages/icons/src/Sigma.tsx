import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Sigma = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 7V4H6l6 8-6 8h12v-3'/>
        </svg>
    );
  }
);