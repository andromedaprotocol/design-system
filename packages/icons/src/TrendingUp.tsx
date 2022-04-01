import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TrendingUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='23 6 13.5 15.5 8.5 10.5 1 18'/>
          <polyline  points='17 6 23 6 23 12'/>
        </svg>
    );
  }
);