import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const StretchHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='4' width='20' height='6' rx='2'/>
          <rect  x='2' y='14' width='20' height='6' rx='2'/>
        </svg>
    );
  }
);