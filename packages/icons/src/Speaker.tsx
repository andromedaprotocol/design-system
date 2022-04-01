import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Speaker = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='4' y='2' width='16' height='20' rx='2' ry='2'/>
          <circle  cx='12' cy='14' r='4'/>
          <line  x1='12' y1='6' x2='12.01' y2='6'/>
        </svg>
    );
  }
);