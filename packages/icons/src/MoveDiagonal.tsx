import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MoveDiagonal = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='13 5 19 5 19 11'/>
          <polyline  points='11 19 5 19 5 13'/>
          <line  x1='19' y1='5' x2='5' y2='19'/>
        </svg>
    );
  }
);