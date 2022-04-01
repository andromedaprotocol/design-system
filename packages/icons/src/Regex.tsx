import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Regex = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17 3v10'/>
          <path  d='M12.67 5.5l8.66 5'/>
          <path  d='M12.67 10.5l8.66-5'/>
          <path  d='M9 17a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z'/>
        </svg>
    );
  }
);