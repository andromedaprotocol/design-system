import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Video = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='23 7 16 12 23 17 23 7'/>
          <rect  x='1' y='5' width='15' height='14' rx='2' ry='2'/>
        </svg>
    );
  }
);