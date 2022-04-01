import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const EqualNot = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='5' y1='9' x2='19' y2='9'/>
          <line  x1='5' y1='15' x2='19' y2='15'/>
          <line  x1='19' y1='5' x2='5' y2='19'/>
        </svg>
    );
  }
);