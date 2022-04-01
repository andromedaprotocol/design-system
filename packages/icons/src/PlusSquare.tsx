import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PlusSquare = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <line  x1='12' y1='8' x2='12' y2='16'/>
          <line  x1='8' y1='12' x2='16' y2='12'/>
        </svg>
    );
  }
);