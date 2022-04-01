import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Lock = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='11' width='18' height='11' rx='2' ry='2'/>
          <path  d='M7 11V7a5 5 0 0110 0v4'/>
        </svg>
    );
  }
);