import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TimerReset = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M10 2h4'/>
          <path  d='M12 14v-4'/>
          <path  d='M4 13a8 8 0 018-7 8 8 0 11-5.3 14L4 17.6'/>
          <path  d='M9 17H4v5'/>
        </svg>
    );
  }
);