import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignStartHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='6' width='6' height='16' rx='2'/>
          <rect  x='14' y='6' width='6' height='9' rx='2'/>
          <path  d='M22 2H2'/>
        </svg>
    );
  }
);