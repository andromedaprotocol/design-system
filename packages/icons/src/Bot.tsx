import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Bot = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='11' width='18' height='10' rx='2'/>
          <circle  cx='12' cy='5' r='2'/>
          <path  d='M12 7v4'/>
          <line  x1='8' y1='16' x2='8' y2='16'/>
          <line  x1='16' y1='16' x2='16' y2='16'/>
        </svg>
    );
  }
);