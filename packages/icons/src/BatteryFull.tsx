import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BatteryFull = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='7' width='16' height='10' rx='2' ry='2'/>
          <line  x1='22' x2='22' y1='11' y2='13'/>
          <line  x1='6' x2='6' y1='10' y2='14'/>
          <line  x1='10' x2='10' y1='10' y2='14'/>
          <line  x1='14' x2='14' y1='10' y2='14'/>
        </svg>
    );
  }
);