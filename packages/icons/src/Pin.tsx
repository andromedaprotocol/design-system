import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Pin = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 21v-7'/>
          <path  d='M9 3v5l-2 4v2h10m0 0h-5m5 0v-2l-2-4V3'/>
          <path  d='M7 3h10'/>
        </svg>
    );
  }
);