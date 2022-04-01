import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CreditCard = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='1' y='4' width='22' height='16' rx='2' ry='2'/>
          <line  x1='1' y1='10' x2='23' y2='10'/>
        </svg>
    );
  }
);