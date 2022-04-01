import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Cross = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M11 2a2 2 0 00-2 2v5H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 002-2v-5h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5V4a2 2 0 00-2-2h-2z'/>
        </svg>
    );
  }
);