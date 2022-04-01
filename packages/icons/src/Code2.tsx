import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Code2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 16l4-4-4-4'/>
          <path  d='M6 8l-4 4 4 4'/>
          <path  d='M14.5 4l-5 16'/>
        </svg>
    );
  }
);