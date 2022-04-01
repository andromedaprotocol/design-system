import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Compass = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'/>
        </svg>
    );
  }
);