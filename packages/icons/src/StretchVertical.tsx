import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const StretchVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='4' y='2' width='6' height='20' rx='2'/>
          <rect  x='14' y='2' width='6' height='20' rx='2'/>
        </svg>
    );
  }
);