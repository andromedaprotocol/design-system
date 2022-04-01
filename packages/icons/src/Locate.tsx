import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Locate = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='2' x2='5' y1='12' y2='12'/>
          <line  x1='19' x2='22' y1='12' y2='12'/>
          <line  x1='12' x2='12' y1='2' y2='5'/>
          <line  x1='12' x2='12' y1='19' y2='22'/>
          <circle  cx='12' cy='12' r='7'/>
        </svg>
    );
  }
);