import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Landmark = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='3' y1='22' x2='21' y2='22'/>
          <line  x1='6' y1='18' x2='6' y2='11'/>
          <line  x1='10' y1='18' x2='10' y2='11'/>
          <line  x1='14' y1='18' x2='14' y2='11'/>
          <line  x1='18' y1='18' x2='18' y2='11'/>
          <polygon  points='12 2 20 7 4 7'/>
        </svg>
    );
  }
);