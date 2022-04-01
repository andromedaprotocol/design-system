import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Type = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='4 7 4 4 20 4 20 7'/>
          <line  x1='9' y1='20' x2='15' y2='20'/>
          <line  x1='12' y1='4' x2='12' y2='20'/>
        </svg>
    );
  }
);