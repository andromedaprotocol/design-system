import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignVerticalJustifyCenter = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='16' width='14' height='6' rx='2'/>
          <rect  x='7' y='2' width='10' height='6' rx='2'/>
          <path  d='M2 12h20'/>
        </svg>
    );
  }
);