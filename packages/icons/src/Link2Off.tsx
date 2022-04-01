import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Link2Off = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 7h2a5 5 0 014 8M9 17H7A5 5 0 017 7'/>
          <line  x1='8' y1='12' x2='12' y2='12'/>
          <line  x1='2' y1='2' x2='22' y2='22'/>
        </svg>
    );
  }
);