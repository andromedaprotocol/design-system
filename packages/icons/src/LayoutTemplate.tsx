import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LayoutTemplate = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 3H3v7h18V3z'/>
          <path  d='M21 14h-5v7h5v-7z'/>
          <path  d='M12 14H3v7h9v-7z'/>
        </svg>
    );
  }
);