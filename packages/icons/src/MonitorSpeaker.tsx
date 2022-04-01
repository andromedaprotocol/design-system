import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MonitorSpeaker = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5.5 20H8'/>
          <path  d='M17 9h.01'/>
          <rect  x='12' y='4' width='10' height='16' rx='2'/>
          <path  d='M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4'/>
          <circle  cx='17' cy='15' r='1'/>
        </svg>
    );
  }
);