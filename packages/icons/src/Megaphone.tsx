import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Megaphone = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 11l18-5v12L3 14v-3z'/>
          <path  d='M11.6 16.8a3 3 0 11-5.8-1.6'/>
        </svg>
    );
  }
);