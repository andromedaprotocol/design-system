import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ListPlus = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M11 12H3'/>
          <path  d='M16 6H3'/>
          <path  d='M16 18H3'/>
          <path  d='M18 9v6'/>
          <path  d='M21 12h-6'/>
        </svg>
    );
  }
);