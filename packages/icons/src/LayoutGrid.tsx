import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LayoutGrid = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='3' y='3' width='7' height='7'/>
          <rect  x='14' y='3' width='7' height='7'/>
          <rect  x='14' y='14' width='7' height='7'/>
          <rect  x='3' y='14' width='7' height='7'/>
        </svg>
    );
  }
);