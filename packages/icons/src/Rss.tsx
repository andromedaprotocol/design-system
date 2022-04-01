import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Rss = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M4 11a9 9 0 019 9'/>
          <path  d='M4 4a16 16 0 0116 16'/>
          <circle  cx='5' cy='19' r='1'/>
        </svg>
    );
  }
);