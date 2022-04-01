import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const RussianRuble = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M14 11c5.333 0 5.333-8 0-8'/>
          <path  d='M6 11h8'/>
          <path  d='M6 15h8'/>
          <path  d='M9 21V3'/>
          <path  d='M9 3h5'/>
        </svg>
    );
  }
);