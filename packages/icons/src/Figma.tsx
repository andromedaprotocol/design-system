import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Figma = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z'/>
          <path  d='M12 2h3.5a3.5 3.5 0 110 7H12V2z'/>
          <path  d='M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z'/>
          <path  d='M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z'/>
          <path  d='M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z'/>
        </svg>
    );
  }
);