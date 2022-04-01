import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GitBranch = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='6' y1='3' x2='6' y2='15'/>
          <circle  cx='18' cy='6' r='3'/>
          <circle  cx='6' cy='18' r='3'/>
          <path  d='M18 9a9 9 0 01-9 9'/>
        </svg>
    );
  }
);