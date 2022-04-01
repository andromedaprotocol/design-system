import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LayoutDashboard = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
          <rect  x='3' y='3' width='7' height='9'/>
          <rect  x='14' y='3' width='7' height='5'/>
          <rect  x='14' y='12' width='7' height='9'/>
          <rect  x='3' y='16' width='7' height='5'/>
        </svg>
    );
  }
);