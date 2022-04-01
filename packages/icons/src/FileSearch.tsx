import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FileSearch = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v3'/>
          <path  d='M14 2v6h6'/>
          <path  d='M5 17a3 3 0 100-6 3 3 0 000 6z'/>
          <path  d='M9 18l-1.5-1.5'/>
        </svg>
    );
  }
);