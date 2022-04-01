import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Scan = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 7V5a2 2 0 012-2h2'/>
          <path  d='M17 3h2a2 2 0 012 2v2'/>
          <path  d='M21 17v2a2 2 0 01-2 2h-2'/>
          <path  d='M7 21H5a2 2 0 01-2-2v-2'/>
        </svg>
    );
  }
);