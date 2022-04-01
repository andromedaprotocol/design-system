import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GitBranch = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='6' y1='3' x2='6' y2='15'/>
          <circle  cx='18' cy='6' r='3'/>
          <circle  cx='6' cy='18' r='3'/>
          <path  d='M18 9a9 9 0 01-9 9'/>
        </svg>
    );
  }
);