import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Slack = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='13' y='2' width='3' height='8' rx='1.5'/>
          <path  d='M19 8.5V10h1.5A1.5 1.5 0 1019 8.5'/>
          <rect  x='8' y='14' width='3' height='8' rx='1.5'/>
          <path  d='M5 15.5V14H3.5A1.5 1.5 0 105 15.5'/>
          <rect  x='14' y='13' width='8' height='3' rx='1.5'/>
          <path  d='M15.5 19H14v1.5a1.5 1.5 0 101.5-1.5'/>
          <rect  x='2' y='8' width='8' height='3' rx='1.5'/>
          <path  d='M8.5 5H10V3.5A1.5 1.5 0 108.5 5'/>
        </svg>
    );
  }
);