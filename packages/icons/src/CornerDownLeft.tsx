import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerDownLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='9 10 4 15 9 20'/>
          <path  d='M20 4v7a4 4 0 01-4 4H4'/>
        </svg>
    );
  }
);