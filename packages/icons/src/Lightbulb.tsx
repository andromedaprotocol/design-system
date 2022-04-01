import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Lightbulb = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='9' y1='18' x2='15' y2='18'/>
          <line  x1='10' y1='22' x2='14' y2='22'/>
          <path  d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14'/>
        </svg>
    );
  }
);