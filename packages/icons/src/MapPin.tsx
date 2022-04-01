import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MapPin = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'/>
          <circle  cx='12' cy='10' r='3'/>
        </svg>
    );
  }
);