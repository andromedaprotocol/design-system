import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlarmClock = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='13' r='8'/>
          <path  d='M12 9v4l2 2'/>
          <path  d='M5 3L2 6'/>
          <path  d='M22 6l-3-3'/>
          <path  d='M6 19l-2 2'/>
          <path  d='M18 19l2 2'/>
        </svg>
    );
  }
);