import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MoreHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='1'/>
          <circle  cx='19' cy='12' r='1'/>
          <circle  cx='5' cy='12' r='1'/>
        </svg>
    );
  }
);