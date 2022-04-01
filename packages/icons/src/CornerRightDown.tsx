import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerRightDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='10 15 15 20 20 15'/>
          <path  d='M4 4h7a4 4 0 014 4v12'/>
        </svg>
    );
  }
);