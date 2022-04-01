import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BookOpen = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z'/>
          <path  d='M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z'/>
        </svg>
    );
  }
);