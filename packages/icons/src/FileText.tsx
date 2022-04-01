import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FileText = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'/>
          <polyline  points='14 2 14 8 20 8'/>
          <line  x1='16' y1='13' x2='8' y2='13'/>
          <line  x1='16' y1='17' x2='8' y2='17'/>
          <line  x1='10' y1='9' x2='8' y2='9'/>
        </svg>
    );
  }
);