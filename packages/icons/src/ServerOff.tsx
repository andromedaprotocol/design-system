import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ServerOff = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 2h13a2 2 0 012 2v4a2 2 0 01-2 2h-5'/>
          <path  d='M10 10L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 002 2h6z'/>
          <path  d='M22 17v-1a2 2 0 00-2-2h-1'/>
          <path  d='M4 14a2 2 0 00-2 2v4a2 2 0 002 2h16.5l1-.5.5.5-8-8H4z'/>
          <path  d='M6 18h.01'/>
          <path  d='M2 2l20 20'/>
        </svg>
    );
  }
);