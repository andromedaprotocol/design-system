import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Option = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 3h6l6 18h6'/>
          <path  d='M14 3h7'/>
        </svg>
    );
  }
);