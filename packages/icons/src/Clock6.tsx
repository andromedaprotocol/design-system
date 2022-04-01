import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Clock6 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='12 6 12 12 12 16.5'/>
        </svg>
    );
  }
);