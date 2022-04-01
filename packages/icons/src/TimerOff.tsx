import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TimerOff = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7.43 7.433A8 8 0 0118.566 18.57M4.582 11A8 8 0 0015 21.419'/>
          <path  d='M2 2l20 20'/>
          <path  d='M12 12v-2'/>
        </svg>
    );
  }
);