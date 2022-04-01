import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PieChart = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21.21 15.89A10 10 0 118 2.83'/>
          <path  d='M22 12A10 10 0 0012 2v10z'/>
        </svg>
    );
  }
);