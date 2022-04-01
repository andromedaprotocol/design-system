import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignVerticalDistributeStart = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='14' width='14' height='6' rx='2'/>
          <rect  x='7' y='4' width='10' height='6' rx='2'/>
          <path  d='M2 14h20'/>
          <path  d='M2 4h20'/>
        </svg>
    );
  }
);