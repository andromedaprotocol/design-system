import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LayoutList = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='14' width='7' height='7'/>
          <rect  x='3' y='3' width='7' height='7'/>
          <line  x1='14' y1='4' x2='21' y2='4'/>
          <line  x1='14' y1='9' x2='21' y2='9'/>
          <line  x1='14' y1='15' x2='21' y2='15'/>
          <line  x1='14' y1='20' x2='21' y2='20'/>
        </svg>
    );
  }
);