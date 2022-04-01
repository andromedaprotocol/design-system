import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Rewind = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='11 19 2 12 11 5 11 19'/>
          <polygon  points='22 19 13 12 22 5 22 19'/>
        </svg>
    );
  }
);