import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Contact = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z'/>
          <line  x1='16' y1='2' x2='16' y2='4'/>
          <line  x1='8' y1='2' x2='8' y2='4'/>
          <circle  cx='12' cy='11' r='3'/>
          <path  d='M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5'/>
        </svg>
    );
  }
);