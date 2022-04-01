import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TerminalSquare = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 11l2-2-2-2'/>
          <path  d='M11 13h4'/>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
        </svg>
    );
  }
);