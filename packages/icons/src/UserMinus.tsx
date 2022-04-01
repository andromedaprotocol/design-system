import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const UserMinus = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'/>
          <circle  cx='8.5' cy='7' r='4'/>
          <line  x1='23' y1='11' x2='17' y2='11'/>
        </svg>
    );
  }
);