import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FlagTriangleLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17 22V2L7 7l10 5'/>
        </svg>
    );
  }
);