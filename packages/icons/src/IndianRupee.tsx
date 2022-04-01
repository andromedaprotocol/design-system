import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const IndianRupee = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 3h12'/>
          <path  d='M6 8h12'/>
          <path  d='M6 13l8.5 8'/>
          <path  d='M6 13h3'/>
          <path  d='M9 13c6.667 0 6.667-10 0-10'/>
        </svg>
    );
  }
);