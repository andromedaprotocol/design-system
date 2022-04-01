import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Crosshair = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='22' y1='12' x2='18' y2='12'/>
          <line  x1='6' y1='12' x2='2' y2='12'/>
          <line  x1='12' y1='6' x2='12' y2='2'/>
          <line  x1='12' y1='22' x2='12' y2='18'/>
        </svg>
    );
  }
);