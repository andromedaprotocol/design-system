import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Navigation2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <polygon  points='12 2 19 21 12 17 5 21 12 2'/>
        </svg>
    );
  }
);