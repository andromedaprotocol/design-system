import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SignalZero = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M2 20h.01'/>
          <path  d='M7 20v-4'/>
        </svg>
    );
  }
);