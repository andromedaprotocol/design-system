import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const TerminalSquare = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7 11l2-2-2-2'/>
          <path  d='M11 13h4'/>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
        </svg>
    );
  }
);