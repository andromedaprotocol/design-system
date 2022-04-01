import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MoveHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='18 8 22 12 18 16'/>
          <polyline  points='6 8 2 12 6 16'/>
          <line  x1='2' y1='12' x2='22' y2='12'/>
        </svg>
    );
  }
);