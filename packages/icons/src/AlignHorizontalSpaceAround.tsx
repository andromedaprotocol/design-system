import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignHorizontalSpaceAround = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='9' y='7' width='6' height='10' rx='2'/>
          <path  d='M4 22V2'/>
          <path  d='M20 22V2'/>
        </svg>
    );
  }
);