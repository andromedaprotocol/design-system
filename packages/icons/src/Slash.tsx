import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Slash = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='4.93' y1='4.93' x2='19.07' y2='19.07'/>
        </svg>
    );
  }
);