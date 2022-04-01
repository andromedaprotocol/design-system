import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PieChart = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21.21 15.89A10 10 0 118 2.83'/>
          <path  d='M22 12A10 10 0 0012 2v10z'/>
        </svg>
    );
  }
);