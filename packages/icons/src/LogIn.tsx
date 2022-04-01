import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LogIn = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4'/>
          <polyline  points='10 17 15 12 10 7'/>
          <line  x1='15' y1='12' x2='3' y2='12'/>
        </svg>
    );
  }
);