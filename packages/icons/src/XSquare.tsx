import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const XSquare = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <line  x1='9' y1='9' x2='15' y2='15'/>
          <line  x1='15' y1='9' x2='9' y2='15'/>
        </svg>
    );
  }
);