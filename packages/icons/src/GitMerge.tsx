import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GitMerge = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='18' cy='18' r='3'/>
          <circle  cx='6' cy='6' r='3'/>
          <path  d='M6 21V9a9 9 0 009 9'/>
        </svg>
    );
  }
);