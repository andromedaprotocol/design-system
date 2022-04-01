import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Unlink2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'/>
        </svg>
    );
  }
);