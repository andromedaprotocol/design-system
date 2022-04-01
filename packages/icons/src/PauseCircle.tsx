import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PauseCircle = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='10' y1='15' x2='10' y2='9'/>
          <line  x1='14' y1='15' x2='14' y2='9'/>
        </svg>
    );
  }
);