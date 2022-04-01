import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowBigRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 12l-7-7v4H3v6h11v4z'/>
        </svg>
    );
  }
);