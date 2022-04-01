import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CornerRightDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='10 15 15 20 20 15'/>
          <path  d='M4 4h7a4 4 0 014 4v12'/>
        </svg>
    );
  }
);