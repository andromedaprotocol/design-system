import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerRightUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='10 9 15 4 20 9'/>
          <path  d='M4 20h7a4 4 0 004-4V4'/>
        </svg>
    );
  }
);