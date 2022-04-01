import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Umbrella = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7'/>
        </svg>
    );
  }
);