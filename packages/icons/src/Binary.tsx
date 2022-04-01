import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Binary = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M10 4H6v6h4V4z'/>
          <path  d='M18 14h-4v6h4v-6z'/>
          <path  d='M14 4h2v6m-2 0h4'/>
          <path  d='M6 14h2v6m-2 0h4'/>
        </svg>
    );
  }
);