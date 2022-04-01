import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Menu = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='4' y1='12' x2='20' y2='12'/>
          <line  x1='4' y1='6' x2='20' y2='6'/>
          <line  x1='4' y1='18' x2='20' y2='18'/>
        </svg>
    );
  }
);