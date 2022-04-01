import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Battery = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='7' width='16' height='10' rx='2' ry='2'/>
          <line  x1='22' x2='22' y1='11' y2='13'/>
        </svg>
    );
  }
);