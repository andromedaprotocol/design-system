import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Divide = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='6' r='1'/>
          <line  x1='5' y1='12' x2='19' y2='12'/>
          <circle  cx='12' cy='18' r='1'/>
        </svg>
    );
  }
);