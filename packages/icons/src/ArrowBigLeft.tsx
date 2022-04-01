import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowBigLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 12l7-7v4h11v6H10v4z'/>
        </svg>
    );
  }
);