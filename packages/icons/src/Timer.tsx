import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Timer = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='10' x2='14' y1='2' y2='2'/>
          <line  x1='12' x2='15' y1='14' y2='11'/>
          <circle  cx='12' cy='14' r='8'/>
        </svg>
    );
  }
);