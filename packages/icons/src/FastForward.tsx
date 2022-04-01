import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FastForward = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='13 19 22 12 13 5 13 19'/>
          <polygon  points='2 19 11 12 2 5 2 19'/>
        </svg>
    );
  }
);