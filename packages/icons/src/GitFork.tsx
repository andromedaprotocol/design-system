import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GitFork = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='18' r='3'/>
          <circle  cx='6' cy='6' r='3'/>
          <circle  cx='18' cy='6' r='3'/>
          <path  d='M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9'/>
          <path  d='M12 12v3'/>
        </svg>
    );
  }
);