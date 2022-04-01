import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LayoutList = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='14' width='7' height='7'/>
          <rect  x='3' y='3' width='7' height='7'/>
          <line  x1='14' y1='4' x2='21' y2='4'/>
          <line  x1='14' y1='9' x2='21' y2='9'/>
          <line  x1='14' y1='15' x2='21' y2='15'/>
          <line  x1='14' y1='20' x2='21' y2='20'/>
        </svg>
    );
  }
);