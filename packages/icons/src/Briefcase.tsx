import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Briefcase = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='7' width='20' height='14' rx='2' ry='2'/>
          <path  d='M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'/>
        </svg>
    );
  }
);