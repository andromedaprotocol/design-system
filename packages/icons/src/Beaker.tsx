import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Beaker = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4.5 3h15'/>
          <path  d='M6 3v16a2 2 0 002 2h8a2 2 0 002-2V3'/>
          <path  d='M6 14h12'/>
        </svg>
    );
  }
);