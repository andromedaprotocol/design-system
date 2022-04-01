import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ShoppingCart = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='9' cy='21' r='1'/>
          <circle  cx='20' cy='21' r='1'/>
          <path  d='M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6'/>
        </svg>
    );
  }
);