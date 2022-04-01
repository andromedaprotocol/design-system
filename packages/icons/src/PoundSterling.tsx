import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PoundSterling = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18 7c0-5.333-8-5.333-8 0'/>
          <path  d='M10 7v14'/>
          <path  d='M6 21h12'/>
          <path  d='M6 13h10'/>
        </svg>
    );
  }
);