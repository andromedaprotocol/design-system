import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const X = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='18' y1='6' x2='6' y2='18'/>
          <line  x1='6' y1='6' x2='18' y2='18'/>
        </svg>
    );
  }
);