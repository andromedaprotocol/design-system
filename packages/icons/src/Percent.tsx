import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Percent = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='19' y1='5' x2='5' y2='19'/>
          <circle  cx='6.5' cy='6.5' r='2.5'/>
          <circle  cx='17.5' cy='17.5' r='2.5'/>
        </svg>
    );
  }
);