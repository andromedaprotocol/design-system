import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Bike = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='5.5' cy='17.5' r='3.5'/>
          <circle  cx='18.5' cy='17.5' r='3.5'/>
          <path  d='M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2'/>
        </svg>
    );
  }
);