import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ToggleRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='1' y='5' width='22' height='14' rx='7' ry='7'/>
          <circle  cx='16' cy='12' r='3'/>
        </svg>
    );
  }
);