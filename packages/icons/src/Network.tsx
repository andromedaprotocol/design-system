import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Network = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='9' y='2' width='6' height='6'/>
          <rect  x='16' y='16' width='6' height='6'/>
          <rect  x='2' y='16' width='6' height='6'/>
          <path  d='M12 8v4m0 0H5v4m7-4h7v4'/>
        </svg>
    );
  }
);