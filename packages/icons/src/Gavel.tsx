import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Gavel = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L11 10'/>
          <path  d='M16 16l6-6'/>
          <path  d='M8 8l6-6'/>
          <path  d='M9 7l8 8'/>
          <path  d='M21 11l-8-8'/>
        </svg>
    );
  }
);