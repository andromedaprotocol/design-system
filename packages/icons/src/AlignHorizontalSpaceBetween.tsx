import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignHorizontalSpaceBetween = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='5' width='6' height='14' rx='2'/>
          <rect  x='15' y='7' width='6' height='10' rx='2'/>
          <path  d='M3 2v20'/>
          <path  d='M21 2v20'/>
        </svg>
    );
  }
);