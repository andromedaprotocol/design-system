import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Crop = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6.13 1L6 16a2 2 0 002 2h15'/>
          <path  d='M1 6.13L16 6a2 2 0 012 2v15'/>
        </svg>
    );
  }
);