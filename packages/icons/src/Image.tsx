import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Image = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <circle  cx='8.5' cy='8.5' r='1.5'/>
          <polyline  points='21 15 16 10 5 21'/>
        </svg>
    );
  }
);