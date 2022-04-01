import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Wind = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17.7 7.7a2.5 2.5 0 111.8 4.3H2'/>
          <path  d='M9.6 4.6A2 2 0 1111 8H2'/>
          <path  d='M12.6 19.4A2 2 0 1014 16H2'/>
        </svg>
    );
  }
);