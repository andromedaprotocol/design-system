import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Crown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14'/>
        </svg>
    );
  }
);