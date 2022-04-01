import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Save = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z'/>
          <polyline  points='17 21 17 13 7 13 7 21'/>
          <polyline  points='7 3 7 8 15 8'/>
        </svg>
    );
  }
);