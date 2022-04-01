import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BarChart2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='18' y1='20' x2='18' y2='10'/>
          <line  x1='12' y1='20' x2='12' y2='4'/>
          <line  x1='6' y1='20' x2='6' y2='14'/>
        </svg>
    );
  }
);