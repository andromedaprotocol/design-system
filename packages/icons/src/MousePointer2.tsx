import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MousePointer2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M4 4l7.07 17 2.51-7.39L21 11.07z'/>
        </svg>
    );
  }
);