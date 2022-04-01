import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ListChecks = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='10' y1='6' x2='21' y2='6'/>
          <line  x1='10' y1='12' x2='21' y2='12'/>
          <line  x1='10' y1='18' x2='21' y2='18'/>
          <polyline  points='3 6 4 7 6 5'/>
          <polyline  points='3 12 4 13 6 11'/>
          <polyline  points='3 18 4 19 6 17'/>
        </svg>
    );
  }
);