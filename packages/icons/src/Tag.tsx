import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Tag = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z'/>
          <path  d='M7 7h.01'/>
        </svg>
    );
  }
);