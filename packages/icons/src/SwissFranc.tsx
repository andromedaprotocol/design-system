import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SwissFranc = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M10 21V3h8'/>
          <path  d='M6 16h9'/>
          <path  d='M10 9.5h7'/>
        </svg>
    );
  }
);