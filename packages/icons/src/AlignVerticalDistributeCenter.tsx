import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlignVerticalDistributeCenter = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='14' width='14' height='6' rx='2'/>
          <rect  x='7' y='4' width='10' height='6' rx='2'/>
          <path  d='M22 7h-5'/>
          <path  d='M7 7H1'/>
          <path  d='M22 17h-3'/>
          <path  d='M5 17H2'/>
        </svg>
    );
  }
);