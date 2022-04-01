import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Award = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='8' r='7'/>
          <polyline  points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'/>
        </svg>
    );
  }
);