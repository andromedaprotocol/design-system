import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ShieldCheck = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/>
          <path  d='M9 12l2 2 4-4'/>
        </svg>
    );
  }
);