import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GraduationCap = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M22 10v6M2 10l10-5 10 5-10 5z'/>
          <path  d='M6 12v5c3 3 9 3 12 0v-5'/>
        </svg>
    );
  }
);