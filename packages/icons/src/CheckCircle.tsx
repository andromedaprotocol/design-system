import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CheckCircle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M22 11.08V12a10 10 0 11-5.93-9.14'/>
          <polyline  points='22 4 12 14.01 9 11.01'/>
        </svg>
    );
  }
);