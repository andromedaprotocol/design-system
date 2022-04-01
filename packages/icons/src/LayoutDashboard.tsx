import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LayoutDashboard = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='7' height='9'/>
          <rect  x='14' y='3' width='7' height='5'/>
          <rect  x='14' y='12' width='7' height='9'/>
          <rect  x='3' y='16' width='7' height='5'/>
        </svg>
    );
  }
);