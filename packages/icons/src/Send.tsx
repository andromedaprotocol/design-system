import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Send = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='22' y1='2' x2='11' y2='13'/>
          <polygon  points='22 2 15 22 11 13 2 9 22 2'/>
        </svg>
    );
  }
);