import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Speaker = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='2' width='16' height='20' rx='2' ry='2'/>
          <circle  cx='12' cy='14' r='4'/>
          <line  x1='12' y1='6' x2='12.01' y2='6'/>
        </svg>
    );
  }
);