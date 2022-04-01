import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Frown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 16s-1.5-2-4-2-4 2-4 2'/>
          <line  x1='9' y1='9' x2='9.01' y2='9'/>
          <line  x1='15' y1='9' x2='15.01' y2='9'/>
        </svg>
    );
  }
);