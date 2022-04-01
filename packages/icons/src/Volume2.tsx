import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Volume2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='11 5 6 9 2 9 2 15 6 15 11 19 11 5'/>
          <path  d='M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'/>
        </svg>
    );
  }
);