import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Linkedin = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z'/>
          <rect  x='2' y='9' width='4' height='12'/>
          <circle  cx='4' cy='4' r='2'/>
        </svg>
    );
  }
);