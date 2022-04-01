import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BellPlus = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'/>
          <path  d='M13.73 21a2 2 0 01-3.46 0'/>
          <path  d='M18 2v6'/>
          <path  d='M21 5h-6'/>
        </svg>
    );
  }
);