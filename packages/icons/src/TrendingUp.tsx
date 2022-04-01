import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TrendingUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='23 6 13.5 15.5 8.5 10.5 1 18'/>
          <polyline  points='17 6 23 6 23 12'/>
        </svg>
    );
  }
);