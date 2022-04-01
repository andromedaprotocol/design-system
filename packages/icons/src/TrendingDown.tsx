import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TrendingDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polyline  points='23 18 13.5 8.5 8.5 13.5 1 6'/>
          <polyline  points='17 18 23 18 23 12'/>
        </svg>
    );
  }
);