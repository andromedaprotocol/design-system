import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Italic = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='19' y1='4' x2='10' y2='4'/>
          <line  x1='14' y1='20' x2='5' y2='20'/>
          <line  x1='15' y1='4' x2='9' y2='20'/>
        </svg>
    );
  }
);