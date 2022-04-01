import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GraduationCap = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M22 10v6M2 10l10-5 10 5-10 5z'/>
          <path  d='M6 12v5c3 3 9 3 12 0v-5'/>
        </svg>
    );
  }
);