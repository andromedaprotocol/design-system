import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Link2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'/>
          <line  x1='8' y1='12' x2='16' y2='12'/>
        </svg>
    );
  }
);