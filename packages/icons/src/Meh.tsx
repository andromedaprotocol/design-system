import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Meh = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='8' y1='15' x2='16' y2='15'/>
          <line  x1='9' y1='9' x2='9.01' y2='9'/>
          <line  x1='15' y1='9' x2='15.01' y2='9'/>
        </svg>
    );
  }
);