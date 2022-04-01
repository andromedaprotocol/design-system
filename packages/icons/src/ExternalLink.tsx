import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ExternalLink = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'/>
          <polyline  points='15 3 21 3 21 9'/>
          <line  x1='10' y1='14' x2='21' y2='3'/>
        </svg>
    );
  }
);