import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Vibrate = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 8l2 2-2 2 2 2-2 2'/>
          <path  d='M22 8l-2 2 2 2-2 2 2 2'/>
          <rect  x='8' y='5' width='8' height='14' rx='1'/>
        </svg>
    );
  }
);