import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Currency = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='8'/>
          <line  x1='3' y1='3' x2='6' y2='6'/>
          <line  x1='21' y1='3' x2='18' y2='6'/>
          <line  x1='3' y1='21' x2='6' y2='18'/>
          <line  x1='21' y1='21' x2='18' y2='18'/>
        </svg>
    );
  }
);