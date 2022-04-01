import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GripVertical = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='9' cy='12' r='1'/>
          <circle  cx='9' cy='5' r='1'/>
          <circle  cx='9' cy='19' r='1'/>
          <circle  cx='15' cy='12' r='1'/>
          <circle  cx='15' cy='5' r='1'/>
          <circle  cx='15' cy='19' r='1'/>
        </svg>
    );
  }
);