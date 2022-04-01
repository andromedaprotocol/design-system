import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Laptop2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='4' width='18' height='12' rx='2' ry='2'/>
          <line  x1='2' y1='20' x2='22' y2='20'/>
        </svg>
    );
  }
);