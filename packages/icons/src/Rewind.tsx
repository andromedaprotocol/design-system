import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Rewind = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='11 19 2 12 11 5 11 19'/>
          <polygon  points='22 19 13 12 22 5 22 19'/>
        </svg>
    );
  }
);