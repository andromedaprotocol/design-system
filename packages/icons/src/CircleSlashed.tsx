import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CircleSlashed = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <path  d='M22 2L2 22'/>
        </svg>
    );
  }
);