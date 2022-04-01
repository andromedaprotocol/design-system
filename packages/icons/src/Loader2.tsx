import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Loader2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 12a9 9 0 11-6.219-8.56'/>
        </svg>
    );
  }
);