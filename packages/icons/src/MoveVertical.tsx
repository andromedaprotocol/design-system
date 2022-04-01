import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MoveVertical = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='8 18 12 22 16 18'/>
          <polyline  points='8 6 12 2 16 6'/>
          <line  x1='12' y1='2' x2='12' y2='22'/>
        </svg>
    );
  }
);