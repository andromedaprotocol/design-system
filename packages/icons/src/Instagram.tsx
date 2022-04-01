import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Instagram = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='2' width='20' height='20' rx='5' ry='5'/>
          <path  d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z'/>
          <line  x1='17.5' y1='6.5' x2='17.51' y2='6.5'/>
        </svg>
    );
  }
);