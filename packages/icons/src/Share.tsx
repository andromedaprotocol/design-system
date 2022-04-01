import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Share = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8'/>
          <polyline  points='16 6 12 2 8 6'/>
          <line  x1='12' y1='2' x2='12' y2='15'/>
        </svg>
    );
  }
);