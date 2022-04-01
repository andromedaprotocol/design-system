import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Music = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M9 18V5l12-2v13'/>
          <circle  cx='6' cy='18' r='3'/>
          <circle  cx='18' cy='16' r='3'/>
        </svg>
    );
  }
);