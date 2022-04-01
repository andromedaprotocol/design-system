import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowBigDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M9 3h6v11h4l-7 7-7-7h4z'/>
        </svg>
    );
  }
);