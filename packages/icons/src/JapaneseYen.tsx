import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const JapaneseYen = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 9.5V21m0-11.5L6 3m6 6.5L18 3'/>
          <path  d='M6 15h12'/>
          <path  d='M6 11h12'/>
        </svg>
    );
  }
);