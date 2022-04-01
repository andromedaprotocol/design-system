import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Hash = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='4' y1='9' x2='20' y2='9'/>
          <line  x1='4' y1='15' x2='20' y2='15'/>
          <line  x1='10' y1='3' x2='8' y2='21'/>
          <line  x1='16' y1='3' x2='14' y2='21'/>
        </svg>
    );
  }
);