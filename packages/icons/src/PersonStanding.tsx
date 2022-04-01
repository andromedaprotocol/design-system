import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PersonStanding = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='5' r='1'/>
          <path  d='M9 20l3-6 3 6'/>
          <path  d='M6 8l6 2 6-2'/>
          <path  d='M12 10v4'/>
        </svg>
    );
  }
);