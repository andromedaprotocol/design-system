import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ArrowUpRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='7' y1='17' x2='17' y2='7'/>
          <polyline  points='7 7 17 7 17 17'/>
        </svg>
    );
  }
);