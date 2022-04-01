import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Slash = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='4.93' y1='4.93' x2='19.07' y2='19.07'/>
        </svg>
    );
  }
);