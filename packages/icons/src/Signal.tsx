import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Signal = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 20h.01'/>
          <path  d='M7 20v-4'/>
          <path  d='M12 20v-8'/>
          <path  d='M17 20V8'/>
          <path  d='M22 4v16'/>
        </svg>
    );
  }
);