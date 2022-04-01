import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ReplyAll = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='7 17 2 12 7 7'/>
          <polyline  points='12 17 7 12 12 7'/>
          <path  d='M22 18v-2a4 4 0 00-4-4H7'/>
        </svg>
    );
  }
);