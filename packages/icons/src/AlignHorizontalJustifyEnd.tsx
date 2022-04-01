import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignHorizontalJustifyEnd = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='5' width='6' height='14' rx='2'/>
          <rect  x='12' y='7' width='6' height='10' rx='2'/>
          <path  d='M22 2v20'/>
        </svg>
    );
  }
);