import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const StarHalf = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2'/>
        </svg>
    );
  }
);