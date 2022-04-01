import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Tornado = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 4H3'/>
          <path  d='M18 8H6'/>
          <path  d='M19 12H9'/>
          <path  d='M16 16h-6'/>
          <path  d='M11 20H9'/>
        </svg>
    );
  }
);