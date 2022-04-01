import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Megaphone = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 11l18-5v12L3 14v-3z'/>
          <path  d='M11.6 16.8a3 3 0 11-5.8-1.6'/>
        </svg>
    );
  }
);